const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type:String, required:true},
    narodnost: {type:String, required:true},
    sport: {type:String, required:true},
})


module.exports = mongoose.model("Sportovec", schema)