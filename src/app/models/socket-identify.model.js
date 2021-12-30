import { DataTypes } from "sequelize";
import { sequelize } from "./../../config/connection.js";

const SocketIdentifyEntity = sequelize.define("sockets_identify", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  socketId: DataTypes.STRING(20),
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

export default SocketIdentifyEntity;
