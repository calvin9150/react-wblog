const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const db = require("./models");

const postRouter = require("./routes/post");

dotenv.config();

db.sequelize.sync();

const app = express();

app.use("/post", postRouter);

app.listen(3005, () => {
  console.log("백엔드 서버 가동");
});
