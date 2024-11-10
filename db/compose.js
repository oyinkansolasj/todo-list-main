const mongoose = require("mongoose")
function connectDB (URL) {
    mongoose.connect(URL).then (() => {
        console.log("Mongoose Connected")
    })
    .catch(console.error)
    process.env.connectDB

}

module.exports= connectDB