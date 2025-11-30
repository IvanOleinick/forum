import postService from "../services/post.service.js";

class PostController {
    async createPost(req, res, next) {
        try {
            const post = await postService.createPost(
                req.params.author,
                req.body,
            );
            return res.status(201).json(post);
        } catch (error) {
            return next(error);
        }
    }

    async getPostById(req, res, next) {
        try {
            const post = await postService.getPostsById(req.params.id);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async deletePost(req, res, next) {
        try {
            const post = await postService.deletePost(req.params.id);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async addLike(req, res, next) {
        try {
            await postService.addLike(req.params.id);
            return res.sendStatus(204);
        } catch (error) {
            return next(error);
        }
    }

    async findPostByAuthor(req, res, next) {
        try {
            const posts = await postService.findPostByAuthor(
                req.params.author,
            );
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async addComment(req, res, next) {
        try {
            const { message } = req.body;
            const { id, commenter } = req.params;

            const post = await postService.addComment(id, commenter, message);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async getPostByTags(req, res, next) {
        try {
            const { values } = req.query;
            const posts = await postService.getPostByTags(values || "");
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async findPostByPeriod(req, res, next) {
        try {
            // /posts/period?dateFrom=YYYY-MM-DD&dateTo=YYYY-MM-DD
            const { dateFrom, dateTo } = req.query;
            const posts = await postService.findPostByPeriod(
                dateFrom,
                dateTo,
            );
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async updatePost(req, res, next) {
        try {
            const post = await postService.updatePost(req.params.id, req.body);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }
}

export default new PostController();
