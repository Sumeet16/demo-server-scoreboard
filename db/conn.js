const mongoose = require('mongoose');
require('dotenv').config();
const connectToDB = () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.jmjsgsv.mongodb.net/scoreboard?retryWrites=true&w=majority", (err) => {
        if(err) console.log('DB not connected 🔴')
        else console.log('DB connected 🟢')
    })
}

module.exports = connectToDB