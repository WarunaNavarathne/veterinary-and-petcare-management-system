const mongoose = require("mongoose");
const cors = require("cors");

const Schema = mongoose.Schema;

const toySchema = new Schema({
    
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

  
    brand : {
        type : String,
        required : true
    } 


})

const Toy = mongoose.model("Toy",toySchema);

module.exports = Toy;