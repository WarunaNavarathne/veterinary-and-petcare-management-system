const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const labSchema = new Schema({

     Mname : {
         type :String,
         required: true

     },

     MID : {
        type :String,
        required: true
     },
     quantity:{
         type:Number,
         required: true
     },
     discription : {
        type :String,
        required: true
     }

})

const Material = mongoose.model("Material",labSchema); //any name,schema
module.exports = Material