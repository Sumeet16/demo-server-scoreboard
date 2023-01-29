const express = require('express');
const router = express.Router();
const userModel = require("../model/user.model");

router.get('/getScore', async (req, res) => {
    try {
        const scores = await userModel.find();
        return res.json({message: "All scores are sent! 🟢", scores: scores})
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred while fetching scores! 🔴" });
    }
})

module.exports = router