const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db/conn");

// middlewares
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "*"],
  methods: ["GET", "POST"],
  credentials: true
}))

app.use(express.json());
app.use('/getScore',require('./routes/getScore'))
app.use('/',require('./routes/updateScore'))

// defining port

const PORT = process.env.PORT || 3001;


// setting up an empty GET Route
app.get("/", (req, res) => {
  res.json({
    message: "You've come to the right place... it's a GET request sent to the API!!",
  });
});

// Starting Server on PORT
app.listen(PORT, () => console.log('Server started on PORT Number: ' + PORT))

module.exports = app;