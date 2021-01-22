import { User } from "../models/User";
import express from "express";

export class UserController {
    constructor() {}

    async create(req: express.Request, res: express.Response) {
        const newUser = await User.create(req.body);
        return res.json({ newUser });
    }

    async getAll(req: express.Request, res: express.Response) {
        const users = await User.findAll({
            include: ["comments"],
        });
        return res.json({ users });
    }

    async update(req: express.Request, res: express.Response) {
        const userId = req.params.id;
        const body = req.body;
        console.log(body);

        const updatedUser = await User.findByPk(userId);
        await updatedUser?.update(body);

        return res.json({ updatedUser });
    }

    async delete(req: express.Request, res: express.Response) {
        const userId = req.params.id;

        const deletedUser = await User.destroy({ where: { id: userId } });

        return res.json({ deletedUser });
    }
}
