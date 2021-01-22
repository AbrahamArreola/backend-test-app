import express from "express";
import userRoutes from './users';
import commentRoutes from './comments';

const app = express.Router();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

app.use(userRoutes);
app.use(commentRoutes);

export default app;
