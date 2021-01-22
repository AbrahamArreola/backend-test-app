import express from 'express'
import { CommentController } from '../controllers/comment-controller'

const commentController = new CommentController();
const app = express.Router();

app.post("/comments/create", commentController.create);
app.get("/comments", commentController.getAll);

export default app;