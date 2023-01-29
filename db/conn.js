const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.jmjsgsv.mongodb.net/scoreboard?retryWrites=true&w=majority", {useNewUrlParser: true, UseUnifiedTopology: true})
.then(()=>{console.log("Connected to MongoDB");})
.catch((err)=>{
    console.log(err);
})