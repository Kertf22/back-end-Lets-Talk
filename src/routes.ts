import { CreateUserController } from './controllers/CreateUserController';
import { Router } from "express";

const createUserController = new CreateUserController() 

const router = Router();

router.post("/users", createUserController.handle)

export { router };