const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const classSchema = new Schema({

    Classcode : {
        type : String,
        required: true
       
    },
    Classname : {
        type:String,
        required: true
    },
    Duration :{
        type:String,
        required: true

    },
    requirement : {
        type:String,
        required: true
    },
    ClassFee :{
        type:Number,
        required: true

    }
 })

 const Classdetail = mongoose.model("Classdetail",classSchema);
 module.exports =Classdetail;