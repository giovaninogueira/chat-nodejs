import * as bcrypt from "bcrypt";
import UserEntity from "./../models/user.model.js";

class UserRepository {
  /**
   * Save User
   * @param {*} param0
   * @returns
   */
  async save({ name, email, password }) {
    const saltRounds = 10;
    const pwd = await bcrypt.hash(password, saltRounds);
    return await UserEntity.create({ name, email, password: pwd });
  }

  /**
   * Find And Count By Email
   * @param {*} email
   * @returns
   */
  async findAndCountByEmail(email) {
    const { count } = await UserEntity.findAndCountAll({
      where: {
        email,
      },
    });
    return count;
  }
}

export { UserRepository };
