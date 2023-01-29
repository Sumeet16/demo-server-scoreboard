const express = require('express');
const router = express.Router();
const userModel = require("../model/user.model");

router.get('/', (req, res) => {
    // try {
    //     const scores = await userModel.find();
    //     return res.json({ message: "All scores are sent! 🟢", scores: scores })
    // } catch (error) {
    //     return res
    //         .status(401)
    //         .json({ message: "Some error occurred while fetching scores! 🔴" });
    // }
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
})

module.exports = router