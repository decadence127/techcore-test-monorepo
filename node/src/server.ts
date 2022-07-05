import express from "express";
import dotenv from "dotenv";

dotenv.config({});

import cors from "cors";
import routes from "./routes";
import { connectDB } from "./utils/connectDB";
import bodyParser from "body-parser";
import { apiRoute } from "./utils/constants/routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(apiRoute, routes);

const port = process.env.PORT || 9119;

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.info(`Server has been started on port ${port}`);
  });
})();
