import { sequelize } from "./../../config/connection.js";
import "./../models/user.model.js";
import "./../models/message-history.model.js";
import "./token-blacklist.model.js";
import "./socket-identify.model.js";

sequelize.sync().then(() => {
  console.log("models created!");
});
