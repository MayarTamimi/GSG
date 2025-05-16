const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.get("/api/quotes", async (req, res) => {
  try {
    const res = await fetch("https://dummyjson.com/quotes");
    if (!res.ok) {
      throw new Error("failed to fetch quotes");
    }
    const data = await res.json();
    res.json(data);
  } catch {
    res.status(500).json({ error: "failed to fetch quotes" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
