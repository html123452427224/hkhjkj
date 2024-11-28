const mongoose = require("mongoose")


const schema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    wins: {type:Number, required:true},
    Championship: {type:String, required:true}


})

module.exports = mongoose.model("f1drivers", schema)