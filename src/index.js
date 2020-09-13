require("./dbConfig/dbConfig");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/postRouter");
const authorRouter = require("./routes/authorRouter");
const adminRouter = require("./routes/adminRouter");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use("/posts", postRouter);
app.use("/author", authorRouter);
app.use("", adminRouter);

app.get("/", (request, response) => {
  response.send("Blog API Server");
});

app.get("*", (request, response) => {
  response.status(404).send("Page Not found");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Application is up and running");
});
