import postRepository from "../repositorys/post.repository.js";

class PostService {
    async createPost(author, data) {
        return postRepository.createPost({ ...data, author });
    }

    async getPostsById(id) {
        const post = await postRepository.findPostById(id);
        if (!post) {
            throw new Error(`Post with ${id} not found.`);
        }
        return post;
    }

    async addLike(postId) {
        const post = await postRepository.addLike(postId);
        if (!post) {
            throw new Error(`Post with ${postId} not found.`);
        }
        return post;
    }

    async findPostByAuthor(author) {
        return postRepository.findPostByAuthor(author);
    }

    async addComment(postId, user, message) {
        const post = await postRepository.addComment(postId, {
            user,
            message,
        });

        if (!post) {
            throw new Error(`Post with ${postId} not found.`);
        }
        return post;
    }

    async deletePost(postId) {
        const post = await postRepository.deletePostById(postId);
        if (!post) {
            throw new Error(`Post with ${postId} not found.`);
        }
        return post;
    }

    async getPostByTags(tagsString) {
        const tagsArray = tagsString
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

        return postRepository.findPostByTags(tagsArray);
    }

    async findPostByPeriod(dateFrom, dateTo) {
        return postRepository.findPostByPeriod(dateFrom, dateTo);
    }

    async updatePost(postId, data) {
        const post = await postRepository.updatePost(postId, data);
        if (!post) {
            throw new Error(`Post with ${postId} not found.`);
        }
        return post;
    }
}

export default new PostService();
