const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petSchema = new Schema({

    petid :{
        type : String,
        required: true,
        
    },
    Petname : {
        type : String,
        required: true
       
    },
    Breed : {
        type : String,
        required: true
       
    },
    Age : {
        type : String,
        required: true
       
    },
    Gender:{
        type :String,
        required: true
       
    },
    Ownername:{
        type : String,
        required: true
       
    },
    nic:{
        type : String,
        required: true
       
    },
    Phonenumber:{
        type : String,
        required: true
       
    },
   
    Email:{
        type : String,
        required: true
       
    },
     Address:{
        type : String,
        required: true
       
    },
    classname:{
        type : String,
        required: true
       
    },
    Group:{
        type : String,
        required: true
       
    },
    status:{
        type : String,
        required: true
       
    },
    Behaviour:{
        type : String,
        required: true
       
    },
    Vaccine:{
        type : String,
        required: true
       
    },
    Rdate:{
        type : Date,
        required: true
       
    }
    
})
const Trainingpetdetail = mongoose.model("Trainingpetdetail",petSchema);
 module.exports =Trainingpetdetail;