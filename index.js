const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/conn");
const userModel = require("../model/user.model");

// middlewares
const app = express();
app.use(cors());
app.use(express.json());

// defining port

connectToDB();

// setting up an empty GET Route
app.get("/", (req, res) => {
  res.json({
    message: "You've come to the right place... it's a GET request sent to the API!!",
  });
});

app.get('/getScore', async (req, res) => {
  try {
    const scores = await userModel.find();
    return res.json({ message: "All scores are sent! 🟢", scores: scores })
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Some error occurred while fetching scores! 🔴" });
  }
})

app.post('/updateScore', async (req, res) => {
  const { currentScoreLose, currentScoreWin, name } = req.body;
  const totalScore = ((currentScoreLose * 10) + (currentScoreWin * 20))

  try {
    const Scores = await userModel.findOneAndUpdate({ team: name }, { $set: { "win": currentScoreWin, "lose": currentScoreLose, "point": totalScore } }, { new: true });
    return res.json({ message: "Scores is updated! 🟢", score: Scores })
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Some error occurred while updating the score! 🔴" });
  }
})

// Starting Server on PORT
app.listen(8080, () => console.log("Server started on PORT Number: " + 8080 + " 🟢"));

// export main module
module.exports = app