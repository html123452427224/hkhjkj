const mongoose = require("mongoose");

const schema = mongoose.Schema({
   oblast: {type:String, required:true},
   druhyRostlin: {type:String, required:true},
   zvirata: {type:String, required:true},
})

module.exports = mongoose.model("ZivotniProstredi", schema)