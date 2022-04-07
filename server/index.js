require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`/index.html`);
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/cars.html"));
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
