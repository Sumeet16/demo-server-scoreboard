const express = require('express');
const router = express.Router();
const userModel = require("../model/user.model");

router.get('/', async (req, res) => {
    try {
        const scores = await userModel.find();
        return res.status(200).json({
            scores: scores
        });
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Some error occurred while fetching scores! 🔴" });
    }
})

module.exports = router