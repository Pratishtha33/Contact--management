import express from "express";
import { json } from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from 'dotenv';

dotenv.config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(json());
app.use("/api/contacts", (req, res) => {
  import("./routes/contactRoutes").then((module) => {
    module.default(req, res);
  });
});
app.use("/api/users", (req, res) => {
  import("./routes/userRoutes").then((module) => {
    module.default(req, res);
  });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
