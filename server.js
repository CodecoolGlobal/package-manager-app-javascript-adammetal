const express = require("express");
const fs = require("fs");
const path = require("path");
const packApi = require('./api/packages');

const app = express();

const static = path.join(__dirname, "static");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static));

const port = 9002;

app.get("/", (req, res) => {
  res.sendFile(path.join(static, "index.html"));
});

app.use('/api/packages', packApi);

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));