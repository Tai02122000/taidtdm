const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRoute = require("./server/routes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const mongooose = require("mongoose");
mongooose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBconection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// app.use(express.json());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.set("views", "./views");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);
app.use("/api", userRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening to port ${port}, http://localhost:${port}`);
});
