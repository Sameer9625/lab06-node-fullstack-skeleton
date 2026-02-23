const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Lab 06: Backend running successfully");
});

app.get("/about", (req, res) => {
  res.send("Name: Sameer | Enrollment: CS-23411638 | Section: 3CSE12");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});