import {PostAttributes, PostTagAttributes} from '@/server/models';
import {Model} from 'sequelize';
import DBInstanceCombinator from '@/server/db-combinator/index';
import {PostCategory} from '@/types/post';

class PostCategoryCombinator extends DBInstanceCombinator {
    private postInstance: Model<PostAttributes>;
    private tagInstances: Model<PostTagAttributes>[];

    public constructor(postInstance: Model<PostAttributes>, tagInstances: Model<PostTagAttributes>[] | null = null) {
        super();
        this.postInstance = postInstance;
        if (tagInstances === null) {
            this.tagInstances = postInstance.dataValues.postTags || [];
        } else {
            this.tagInstances = tagInstances;
        }
    }

    public get(): PostCategory {
        return {
            serialCode: this.postInstance.dataValues.serialCode,
            date: this.postInstance.dataValues.publicDate,
            image: this.postInstance.dataValues.imageUrl,
            title: this.postInstance.dataValues.title,
            series: this.postInstance.dataValues.seriesName,
            summary: this.postInstance.dataValues.summary,
            tags: this.tagInstances.map((tag) => tag.dataValues.name),
        }
    }
}

export default PostCategoryCombinator;
