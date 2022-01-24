//Defining Schema.
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const mongoose = require("mongoose");   //Importing mongoose package.
//import mongoose from 'mongoose';  //Test this when run.

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    queueNO : {
        type: Number,
        required: true
    },
    appointmentID : {
        type: String,
        required: true,
        unique: true
    },
    ownerName : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    email : {
        type: String,
    },
    NIC : {
        type: Number,
        required: true
    },
    tp : {
        type: Number,
        required: true
    },
    ownerGender : {
        type: String,
        required: true
    },
    
    mobile : {
        type: Number,
        required: true
    },
    dateOfAppointment : {
        type: Date,
        required: true
    },
    animalCategory : {
        type: String,
        required: true
    },
    animalBreed : {
        type: String,
        required: true
    },
    animalAGE : {
        type: Number,
        required: true
    },
    animalName : {
        type: String,
        required: true
    },
    animalGender : {
        type: String
    },
    animalWeight : {
        type: Number,
        required: true
    },
    doctorID : {
        type: String,
        required: true
    },
    diseases : {
        type: String,
        required: true
    },
    specialNotes : {
        type: String,
        required: true
    },
    confirmation : {
        type: String,
        default: "Pending",
        required: true
    }
})

//Creating a model.
//To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema).
const Appointments = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointments;   //Compulsory