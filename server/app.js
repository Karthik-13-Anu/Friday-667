const express = require("express");
const app = express();
const PORT = 3000;

app.get("/welcome", (req, res) => {
  res.send("Welcome back");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
