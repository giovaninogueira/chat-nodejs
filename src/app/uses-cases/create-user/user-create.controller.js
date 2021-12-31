//import UserService from "../services/user.service.js";
import * as bcrypt from "bcrypt";
import { ErrorCustom } from "../../../utils/error-custom.js";
import UserEntity from "../../models/user.model.js";
import UserService from "../../services/user.service.js";

class UserCreateController {
  /**
   *
   * @param {UserService} userService
   */
  constructor(userService) {
    this.userService = userService;
  }

  /**
   * TODO:: Validação dos campos obrigatórios
   * @param {import("express").Request} req
   * @param {import("express").Response} resp
   */
  async handler(req, resp) {
    const body = req.body;
    const { uuid, name, email } = await this.userService.save(body);
    return resp.status(201).send({ uuid, name, email });
  }
}

export default UserCreateController;
