const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/conn");

// middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes/getScore"));
app.use(require("./routes/updateScore"));

// defining port

connectToDB();

// setting up an empty GET Route
app.get("/", (req, res) => {
  res.json({
    message: "You've come to the right place... it's a GET request sent to the API!!",
  });
});

// Starting Server on PORT
app.listen(8080, () => console.log("Server started on PORT Number: " + 8080 + " 🟢"));

// export main module
module.exports = app