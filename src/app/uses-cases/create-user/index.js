import { UserRepository } from "../../repositorys/user.repository.js";
import UserService from "../../services/user.service.js";
import UserCreateController from "./user-create.controller.js";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userCreateController = new UserCreateController(userService);
export { userCreateController };
