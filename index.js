require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`Hello Webclues Infotech... This is just a demo project for Second Round of Interview and Applicaiton is running on Port ${port} as per the requirement`);
});


app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});