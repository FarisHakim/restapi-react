import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3000;
var getUser = require("../database.js");

app.get("/api/user", (req: Request, res: Response) => {
  console.log(getUser);
  return res.send(getUser);
});

app.listen(port, () => {
  console.log("Connected");
});
