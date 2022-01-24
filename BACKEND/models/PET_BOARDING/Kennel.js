const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kennelSchema = new Schema({

kennelname : {
    type : String,
    required: true 
}, 
kincharge : {
    type : String,
    required: true 
}, 
kstatus : {
    type : String,
    required: true 
}, 
ksize : {
    type : String,
    required: true 
}, 

kpurpose : {
    type : String,
    required: true 
}


})


    const Kennel = mongoose.model("Kennel",kennelSchema);

    module.exports = Kennel;
    