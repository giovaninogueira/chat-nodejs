import { DataTypes } from "sequelize";
import { sequelize } from "./../../config/connection.js";
import UserEntity from "./user.model.js";

const MessageHistoryEntity = sequelize.define("messages_history", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  message: DataTypes.TEXT("medium"),
  from: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: {
        tableName: 'users',
      },
      key: "uuid",
    },
  },
  to: {
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

export default MessageHistoryEntity;
