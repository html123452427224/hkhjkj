const mongoose = require("mongoose")

const mongooseSchema = mongoose.schema({
    name: {type:String, required:true},
    employees: {type:Number, required:true},
    games: {type:Number, required:true},
})


module.exports = mongoose.model("studio", mongooseSchema)