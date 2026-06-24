import express from "express";
import signUpController from "./controllers/signUpController";
import loginController from "./controllers/loginController";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sign-up", signUpController);
app.post("/login", loginController);

export default app;
