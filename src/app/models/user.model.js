import { DataTypes } from "sequelize";
import { sequelize } from "./../../config/connection.js";

const UserEntity = sequelize.define("users", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  updatedAt: DataTypes.DATE,
  createdAt: DataTypes.DATE,
});

export default UserEntity;
