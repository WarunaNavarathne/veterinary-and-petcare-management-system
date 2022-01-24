const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boardpetSchema = new Schema ({

boardid : {
    type : String,
    required: true
},

bpname : {
    type : String,
    required: true
},

boname : {
    type : String,
    required: true
},

bomail : {
    type : String,
    required: true
},


bocontact : {
    type : String,
    required: true
},

bkennel : {
    type : String,
    required: true
},

bpdate : {
    type : Date,
    required: true 
    
},

bnday : {
    type : Number,
    required: true
}

})

const Boardpet = mongoose.model("Boardpet",boardpetSchema);

module.exports = Boardpet;