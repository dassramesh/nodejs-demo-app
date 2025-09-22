const express = require("express");

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/", (_req, res) => {
  res.send("Hello from server");
});

module.exports = { app };
