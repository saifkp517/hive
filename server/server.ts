import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/createpost', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

