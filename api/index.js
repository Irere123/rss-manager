const express = require("express");
const morgan = require("morgan");
const Parser = require("rss-parser");

const parser = new Parser();

let items = [];

const app = express();
express.json();

parser
  .parseURL("http://rss.cnn.com/rss/edition.rss")
  .then((result) => {
    items = result.items;
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res
    .send(
      `<pre>${items.map((item) => {
        return `<div><a href="${item.link}">${item.title}</a></div>`;
      })}</pre>`
    )
    .status(200);
});

app.get("/:parseUrl", (req, res) => {
  const { parseUrl } = req.params;
  parser
    .parseURL(parseUrl)
    .then((result) => {
      res.json({ result, success: false }).status(200);
    })
    .catch((error) => {
      res.json({ error, success: false }).status(400);
    });
});

app.listen(8000, () => {
  console.log("server started http://localhost:8000/");
});
