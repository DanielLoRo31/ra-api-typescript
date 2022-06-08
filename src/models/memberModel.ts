import { Schema, model } from "mongoose";

const member = new Schema(
  {
    nombre: String,
    matricula: String,
  },
  { collection: "ra_nombres" }
);

export default model("ra_nombres", member);
