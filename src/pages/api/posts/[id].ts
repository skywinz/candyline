import {BlogPostService} from '@/services/post';


const handler = async (req, res)  => {
    const { id } = req.query;

    if (typeof id !== 'string') {
        res.status(400).json({error: "Failed"});
        return;
    }

    const service = await BlogPostService.getInstance();
    const post = service.getPost(id);
    if (post === null) {
        res.status(404).end();
    } else {
        res.status(200).json(post);
    }
}

export default handler;