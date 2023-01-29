const express = require('express');
const router = express.Router();
const userModel = require("../model/user.model");

router.post('/updateScore', async (req, res) => {
    const { currentScoreLose, currentScoreWin, name } = req.body;
    const totalScore = ((currentScoreLose * 10) + (currentScoreWin * 20))

    try {
        const Scores = await userModel.findOneAndUpdate({team: name}, { $set: {"win": currentScoreWin, "lose": currentScoreLose, "point": totalScore}}, {new: true} );
        return res.json({message: "Scores is updated! 🟢", score: Scores})
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred while updating the score! 🔴" });
    }
})

module.exports = router