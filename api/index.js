const express = require("express");
const morgan = require("morgan");
const Parser = require("rss-parser");
const cors = require("cors");

const parser = new Parser();

let items = [];

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

parser
  .parseURL("https://www.reddit.com/.rss")
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

app.get("/parse", (req, res) => {
  const { parseUrl } = req.body;

  parser
    .parseURL(parseUrl)
    .then((result) => {
      res.json({ result, success: true }).status(200);
    })
    .catch((error) => {
      console.log(error);
      res.json({ error, success: false }).status(500);
    });
});

app.get("/reddit", (_req, res) => {
  const parseUrl = "https://www.reddit.com/.rss";
  parser
    .parseURL("https://www.reddit.com/r/programming/.rss")
    .then((result) => {
      console.log(result);
      return res.json({ result, success: true }).status(200);
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error, success: false }).status(500);
    });
});

app.get("/cnn", (_req, res) => {
  const parseUrl = "https://www.cnn.com/rss/cnn_latest.rss";
  parser
    .parseURL(parseUrl)
    .then((result) => {
      console.log(result);
      return res.json({ result, success: true }).status(200);
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error, success: false }).status(500);
    });
});

app.listen(8000, () => {
  console.log("server started http://localhost:8000/");
});
