import {MARKDOWNS_PATH} from '@/constants/server';
import matter, {GrayMatterFile} from 'gray-matter';
import fs from 'fs';
import {marked} from 'marked';

class AboutService {

    public static getAboutContents(): string {
        const path = `${MARKDOWNS_PATH}/about.md`;
        const markdown: GrayMatterFile<string> = matter(fs.readFileSync(path, 'utf-8'));
        return markdown.content;
    }
}

export default AboutService;