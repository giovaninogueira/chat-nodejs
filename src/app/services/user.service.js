import { ErrorCustom } from "../../utils/error-custom.js";
import { UserRepository } from "./../repositorys/user.repository.js";

export default class UserService {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Save User Register
   * @param {*} param0
   * @returns
   */
  async save({ name, email, password }) {
    await this.emailExist(email);
    return await this.userRepository.save({ name, email, password });
  }

  /**
   * Email Exist
   * @param {*} email
   */
  async emailExist(email) {
    const count = await this.userRepository.findAndCountByEmail(email);
    if (count) {
      throw new ErrorCustom({
        error: "Email exist...",
        status: 400,
      });
    }
  }
}
