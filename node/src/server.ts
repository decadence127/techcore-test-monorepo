import express from "express";
import dotenv from "dotenv";

dotenv.config({});

import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use("/api", routes);

const port = process.env.PORT || 9119;

(async () => {
  // await connectDB()
  app.listen(port, () => {
    console.info(`Server has been start on port ${port}`);
  });
})();
