import { DataTypes } from "sequelize";
import { sequelize } from "./../../config/connection.js";

const TokenBlacklistEntity = sequelize.define("tokens_blacklist", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userUUID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: {
        tableName: 'users',
      },
      key: "uuid",
    },
  },
  updatedAt: DataTypes.DATE,
  createdAt: DataTypes.DATE,
});

export default TokenBlacklistEntity;
