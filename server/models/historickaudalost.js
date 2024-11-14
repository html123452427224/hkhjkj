const mongoose = require("mongoose");

const schema = mongoose.Schema({
   nameOfUdalosti: {type:String, required:true},
   date: {type:Number, required:true},
   place: {type:String, required:true},
})

module.exports = mongoose.model("HistorickaUdalost", schema)