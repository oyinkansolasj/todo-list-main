const mongoose = require("mongoose")
//This is the function that would connect to the database remotely 
function connectDB (URL) {
    mongoose.connect(URL).then (() => {
        console.log("Mongoose Connected")
    })
    .catch(console.error)
    process.env.connectDB

}

module.exports= connectDB