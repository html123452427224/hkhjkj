const mongoose = require("mongoose");

const schema = mongoose.schema({
   name: {type:String, required:true},
   manufactorer: {type:String, required:true},
   releaseDate: {type:Number, required:true},
})

module.exports = mongoose.model("Platform", schema)