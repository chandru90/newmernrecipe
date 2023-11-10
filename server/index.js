import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());

  app.use(
    cors({
      origin: "https://newmernrecipe.vercel.app",
      methods: "POST,GET",
      credentials: true
    })
  );

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://admin:admin@chancluster.qrpx1av.mongodb.net/recipe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));
