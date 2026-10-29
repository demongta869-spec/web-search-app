const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Web Search</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: 70px auto;
          padding: 20px;
          text-align: center;
          background: #f5f5f5;
        }
        input, button {
          padding: 12px;
          font-size: 16px;
          margin: 5px;
        }
        input { width: 65%; }
      </style>
    </head>
    <body>
      <h1>Web Search</h1>
      <form action="/search" method="get">
        <input name="q" placeholder="Search the web..." required>
        <button type="submit">Search</button>
      </form>
    </body>
    </html>
  `);
});

app.get("/search", (req, res) => {
  const q = String(req.query.q || "").trim();
  if (!q) return res.redirect("/");
  res.redirect(
    "https://www.google.com/search?q=" + encodeURIComponent(q)
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
