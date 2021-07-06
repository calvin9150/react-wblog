const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const db = require("./models");

const passportConfig = require("./passport");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

const app = express();
dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결됨");
  })
  .catch(console.err);

passportConfig();

app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3005, () => {
  console.log("백엔드 서버 가동");
});
