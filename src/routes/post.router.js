import {Router} from "express";
import postController from "../controllers/post.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post("/post/:author", validate("createPost"),postController.createPost,
);

router.get("/post/:id", postController.getPostById);

router.delete("/post/:id", postController.deletePost);

router.patch("/post/:id/like", postController.addLike);

router.patch("/post/:id/comment/:commenter", postController.addComment);

router.get("/posts/author/:author", postController.findPostByAuthor);

router.get("/posts/tags", postController.getPostByTags);

router.get("/posts/period", postController.findPostByPeriod);

router.patch("/post/:id", postController.updatePost);

export default router;
