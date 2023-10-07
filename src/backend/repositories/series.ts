import {Repository} from '@/backend/repositories/index';
import {SeriesData} from '@/types/series';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import {PostData} from '@/types/post';

export class SeriesRepository extends Repository {
    private static instance: SeriesRepository | null = null;
    private seriesFilePath: string = path.join(process.cwd(), '_series.yml');
    private series: SeriesData[];
    private indexes: Map<string, number>;

    private async init() {
        const seriesFileContent = fs.readFileSync(this.seriesFilePath, 'utf-8');

        this.series = [];
        this.indexes = new Map<string, number>();

        const rawData = yaml.load(seriesFileContent);
        const rawSeries = rawData.series;

        for (const [_, data] of Object.entries(rawSeries)) {
            const {name, summary} = data;
            this.series.push({name, summary});
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

    public getList(): SeriesData[] {
        return this.series;
    }

    public getSeries(seriesName: string): SeriesData | null {
        const key: number | undefined = this.indexes.get(seriesName);
        if (key === undefined) {
            return null;
        }
        return this.series[key];
    }
}