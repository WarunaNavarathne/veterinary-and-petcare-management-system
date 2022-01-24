const mongoose = require("mongoose");
const cors = require("cors");

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    
   Supplier_id : {
        type : String,
        required : true
    },
    
    Supplier_name : {
        type : String,
        required : true
    },

    company : {
        type : String,
        required : true
    },

    phoneNo:{
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    }
    
})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;