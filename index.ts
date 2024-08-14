const express = require("express");
const mongoose = require("mongoose");
const App = express();
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_CONNECT_USERNAME}:${process.env.DB_CONNECT_PASSWORD}@cluster0.36poy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const port = 3000;

App.listen(port, () => {
  console.log(`Server in ${port} running `);
});

App.get("/", (req: any, res: any) => {
  res.send("Hello From Express with");
});
