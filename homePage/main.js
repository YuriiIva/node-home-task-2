// const http = require("http");
const express = require("express");
// const { nextTick } = require("process");

const PORT = 3000;

const app = express();
app.use(express.json());

app.get(
  "/hello",
  (req, res, next) => {
    // res.send("Hello");
    console.log("Hello");
    // next(new Error("samething wrong"));
    next();
  },
  (req, res, next) => {
    res.send("hello word");
  }
);

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use((err, req, res, next) => {
  delete err.stack;
  next(err);
});

app.listen(PORT, () => {
  console.log("Server started listening on port", PORT);
});

// const server = http.createServer((req, res) => {
//   console.log(`req.method`, req.method);
//   console.log(`req.url`, req.url);
//   console.log(`req.headers`, req.headers);

//   let body = "";
//   req.on("data", (chunk) => (body += chunk.toString()));
//   req.on("end", () => console.log(body));
//   res.end("hello word");
// });

// server.listen(PORT, () => {
//   console.log("Server startded listening on port", PORT);
// });
