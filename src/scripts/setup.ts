import fs from 'fs';
import {glob} from 'glob';
import path, {ParsedPath} from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

import {Post, PostSeries, PostTag, sequelize} from '../server/models';
import {PATH_DIR_POST, PATH_FILE_SERIES, SQLITE_ROOT} from '../constants/server';
import {PostCategory} from '@/types/post';
import {SeriesData} from '@/types/series';

/**
 * sqlite 데이터베이스 파일 생성
 * 어차피 딱 한번 실행되므로 이미 sqlite파일이 존재하는지 체크를 하지 않음
 */
const createDatabaseFile = async () => {
    fs.access(SQLITE_ROOT, fs.constants.F_OK, (err) => {
       if (!err) {
          fs.unlinkSync(SQLITE_ROOT);
       }
    });

    return  await sequelize.authenticate()
        .then(async () => {
            return await sequelize.sync().then(() => {
                return true;
            }).catch((e) => {
                console.log(e);
                return false;
            });
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
}

/**
 * _series.yml 로부터 시리즈 관련 데이터 모으기
 */
const collectSeries = async (): Promise<SeriesData[]> => {
    const rawData = fs.readFileSync(PATH_FILE_SERIES, 'utf-8');
    const yamlData: any = yaml.load(rawData);
    const serises: SeriesData[] = []

    Object.keys(yamlData.series).forEach((seriesName) => {
        serises.push(yamlData.series[seriesName]);
    })
    return serises;
}

/**
 * Series데이터 데이터베이스에 저장하기
 */
const saveSerieses2Database = async (serieses: SeriesData[]) => {
    for (const series of serieses) {
        await PostSeries.create({
            name: series.name,
            summary: series.summary,
            imageUrl: series.image,
        })
    }
}

/**
 * _posts 디렉토리 안에 있는 모든 마크다운 기반의 포스트 파일 데이터들을
 * 불러오기
 */
const collectPosts = async (): Promise<PostCategory[]> => {
    const postFiles: ParsedPath[] = (await glob(`${PATH_DIR_POST}/*.md`)).map((pathname) => path.parse(pathname));

    // 빠른 속도로 세팅하기 위해
    // 비동기로 한꺼번에 수행
    return await Promise.all(postFiles.map(async (file): Promise<PostCategory> => {
        const postCode = file.name;
        const fullPath = `${file.dir}/${file.base}`;
        const post = matter(fs.readFileSync(fullPath, 'utf-8'));
        return {
            serialCode: postCode,
            date: new Date(post.data.date),
            image: post.data.image,
            series: post.data.series,
            summary: post.data.summary,
            tags: post.data.tags,
            title: post.data.title,
        }
    }));
}

/**
 * 포스트 데이터들을 전부 DB에 저장
 */
const savePosts2database = async (posts: PostCategory[]) => {
    for (const postData of posts) {
        postData.date.setHours(postData.date.getHours() + 9);
        const postInstance = await Post.create({
            id: parseInt(postData.serialCode.split('_')[0]),
            serialCode: postData.serialCode,
            title: postData.title,
            imageUrl: postData.image,
            publicDate: postData.date ,
            summary: postData.summary,
            seriesName: postData.series,
        });
        for(const tag of postData.tags) {
            await PostTag.create({
                name: tag,
                postId: postInstance.dataValues.id,
            })
        }
    }
}

const setup = async () => {
    let pass = await createDatabaseFile();

    if (!pass) {
        return false;
    }

    const series = await collectSeries();
    await saveSerieses2Database(series);

    const posts = await collectPosts();
    await savePosts2database(posts);

    return true;
}

setup().then((pass) => {
    if(pass) {
        console.log("Success");
    } else {
        console.log("Failed");
    }
});