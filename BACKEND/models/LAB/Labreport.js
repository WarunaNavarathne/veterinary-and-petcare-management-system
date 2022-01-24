const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const labreportSchema = new Schema({

     PetName : {
         type :String,
         required: true

     },
     PetindexNo:{
         type:String,
         required: true
     },

    OwnerName:{
         type:String,
         required: true
     },
     
     OwnerContactNo:{
        type:String,
        required: true
    },

    Tests:{
        type:String,
        required: true
    },

    TestedBy:{
        type:String,
        required: true
    },

    TDate:{
        type:Date,
        required: true
    }

})

const Labreport = mongoose.model("Reports_LAB",labreportSchema); //any name,schema
module.exports = Labreport;