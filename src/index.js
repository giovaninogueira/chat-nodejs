import "express-async-errors";
import express from "express";
import { router } from "./routes/routes.js";
import "./app/models/index.js";
import { errorHandler } from "./config/error-handler.js";

const app = express();

app.use(express.json());
app.use("/", router);
app.use(errorHandler);

app.listen(3000, () => console.log("Server is running"));
