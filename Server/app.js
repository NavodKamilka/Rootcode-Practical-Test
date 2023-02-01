require("dotenv").config();
const express = require("express");
const app = express();
const postRouter = require("./api/post/post.router");

app.use(express.json());

app.use("/api/post", postRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
