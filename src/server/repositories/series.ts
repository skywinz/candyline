import {Repository} from '@/server/repositories/index';
import {SeriesData} from '@/types/series';
import fs from 'fs';
import yaml from 'js-yaml';
import {PATH_FILE_SERIES} from '@/constants/server';

export class SeriesRepository extends Repository {
    private static instance: SeriesRepository | null = null;
    private series: SeriesData[] = [];
    private indexes: Map<string, number> = new Map();

    private async init() {
        const seriesFileContent = fs.readFileSync(PATH_FILE_SERIES, 'utf-8');

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