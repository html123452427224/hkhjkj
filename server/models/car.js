const mongoose = require("mongoose")

const schema = mongoose.Schema({
    znacka: {type:String, required:true},
    model: {type:String, required:true},
    rokvyroby: {type:Number, required:true},
    typmotoru: {type:String, required:true},
})


module.exports = mongoose.model("Car", schema)