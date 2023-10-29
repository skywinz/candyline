import {Repository} from '@/server/repositories/index';
import {SeriesData} from '@/types/series';
import {PostSeries, PostSeriesAttributes} from '../models';
import {Model} from 'sequelize';

export class SeriesRepository extends Repository {
    private static instance: SeriesRepository | null = null;

    protected async init() {}

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

    public async getSeries(seriesName: string): Promise<SeriesData | null> {
        const res: Model<PostSeriesAttributes> | null = await PostSeries.findOne({
            where: {
                name: seriesName,
            }
        });

        if (!res) {
            return null;
        } else {
            return {
                name: res.dataValues.name,
                image: res.dataValues.imageUrl,
                summary: res.dataValues.summary,
            }
        }
    }
}