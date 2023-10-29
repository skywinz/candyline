import {Repository} from '@/server/repositories/index';
import {SeriesData} from '@/types/series';
import fs from 'fs';
import yaml from 'js-yaml';
import {PATH_FILE_SERIES} from '@/constants/server';
import {PostSeries} from '../models';

export class SeriesRepository extends Repository {
    private static instance: SeriesRepository | null = null;
    private series: SeriesData[] = [];
    private indexes: Map<string, number> = new Map();

    protected async init() {
        const seriesFileContent = fs.readFileSync(PATH_FILE_SERIES, 'utf-8');

        const rawData: any = yaml.load(seriesFileContent);
        const rawSeries: SeriesData[] = rawData.series;

        for (const [_, data] of Object.entries(rawSeries)) {
            const {name, summary, image} = data;
            this.series.push({name, summary, image});
            this.indexes.set(name, this.series.length - 1);
        }
    }

    public static async getInstance(): Promise<SeriesRepository> {
        if (!SeriesRepository.instance) {
            SeriesRepository.instance = new SeriesRepository();
            await SeriesRepository.instance.init();
        }
        return SeriesRepository.instance;
    }

    public async getList(): Promise<SeriesData[]> {
        const seriesList: SeriesData[] = [];

        await PostSeries.findAll()
            .then((serieses) => {
                serieses.forEach((series) => {
                    const seriesAttribute = series.get();
                    seriesList.push({
                        name: seriesAttribute.name,
                        summary: seriesAttribute.summary,
                        image: seriesAttribute.imageUrl,
                    });
                })
            })
        return seriesList;
    }

    public getSeries(seriesName: string): SeriesData | null {
        const key: number | undefined = this.indexes.get(seriesName);
        if (key === undefined) {
            return null;
        }
        return this.series[key];
    }
}