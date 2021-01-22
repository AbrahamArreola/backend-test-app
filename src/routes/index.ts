import express from "express";

const app = express.Router();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

export default app;
