import { Comment } from "../models/Comment";
import express from "express";
import { User } from "../models/User";

export class CommentController {
    constructor() {}

    async create(req: express.Request, res: express.Response) {
        try {
            const body = req.body;
            const user = await User.findByPk(body.userId);
            if (user) {
                const newComment = await Comment.create(body);
                return res.json({ newComment });
            }

            return res.json({
                msg: "fail",
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(req: express.Request, res: express.Response) {
        const comments = await Comment.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ["name"],
                },
            ],
        });

        res.json({comments});
    }
}
