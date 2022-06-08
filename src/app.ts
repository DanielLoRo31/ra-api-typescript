import express from "express";

const app = express();

import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import membersRoute from './routes/membersRoute'

app.use(cors());
app.set("puerto", 3001);

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(morgan("dev"));

mongoose
.connect(
  "mongodb+srv://mario:PkfiCL8q2GKsZ5Zz@cluster0.fihum.mongodb.net/ra?retryWrites=true&w=majority"
)
// mongoose.connect(process.env.MONGO_URL)
.then((db) => {
  console.log("Conectando a mongo DB");
})
.catch((err) => {
  console.error("Hubo un error al conectar con Mongo DB: " + err);
});


app.use("/members", membersRoute);

app.get("/", (req, res) => {
  res.send("Well done!");
});

export default app;
