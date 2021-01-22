import express from 'express'
import { UserController } from '../controllers/user-controller'

const userController = new UserController();
const app = express.Router();

app.post("/users/create", userController.create);
app.get("/users", userController.getAll);
app.put("/users/update/:id", userController.update);
app.delete("/users/delete/:id", userController.delete);

export default app;