
require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/post-route");

const errorHanler = require("./middleware/error");

const web = express();

web.use(express.json());

web.use("/auth", authRoute);
web.use("/post", postRoute);

web.use(errorHanler);

web.listen(8000, () => {
  console.log("Server run on port 8000");
});
