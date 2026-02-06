const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/api/movies", (req, res) => {
  res.json([
    { id: 1, title: "DevOps Diaries" },
    { id: 2, title: "Kubernetes Wars" }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

