import express from "express";
import loginController from "./controllers/loginController.ts";
import signUpController from "./controllers/signUpController.ts";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sign-up", signUpController);
app.post("/login", loginController);

export default app;
