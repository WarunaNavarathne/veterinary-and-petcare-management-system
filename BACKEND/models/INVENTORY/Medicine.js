const mongoose = require("mongoose");
const cors = require("cors");

const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    
    item_No : {
        type : String,
        required : true
    },
    
    name : {
        type : String,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },

    expired_Date :{
        type : Date,
        required : true
    },

    brand : {
        type : String,
        required : true
    } 


})

const Medicine = mongoose.model("Medicine",medicineSchema);

module.exports = Medicine;