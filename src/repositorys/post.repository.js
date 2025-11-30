import Post from "../models/post.model.js";

class PostRepository {
    async createPost(postData) {
        return Post.create(postData);
    }

    async findPostById(id) {
        return Post.findById(id);
    }

    async deletePostById(id) {
        return Post.findByIdAndDelete(id);
    }

    async addLike(postId) {
        return Post.findByIdAndUpdate(
            postId,
            { $inc: { likes: 1 } },
            { new: true },
        );
    }

    async findPostByAuthor(author) {
        return Post.find({ author });
    }

    async addComment(postId, commentData) {
        return Post.findByIdAndUpdate(
            postId,
            { $push: { comments: commentData } },
            { new: true },
        );
    }

    async findPostByTags(tagsArray) {
        return Post.find({ tags: { $in: tagsArray } });
    }

    async findPostByPeriod(dateFrom, dateTo) {
        return Post.find({
            dateCreated: {
                $gte: new Date(dateFrom),
                $lte: new Date(dateTo),
            },
        });
    }

    async updatePost(postId, data) {
        return Post.findByIdAndUpdate(postId, data, { new: true });
    }
}

export default new PostRepository();
