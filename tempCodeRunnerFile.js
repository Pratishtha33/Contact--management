import express, { json } from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";

import dotenv from 'dotenv';

dotenv.config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
