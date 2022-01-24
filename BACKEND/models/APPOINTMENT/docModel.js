//Defining Schema.
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const mongoose = require("mongoose");   //Importing mongoose package.
//import mongoose from 'mongoose';  //Test this when run.

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    docName : {
        type: String,
        required: true
    },
    doctorID : {
        type: String,
        required: true
    },
    arrival : {
        type: String,
        default: "Pending",
        required: true
    },
    noOfAppointments : {
        type: String,
        required: true
    },
})

//Creating a model.
//To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema).
const Attendance = mongoose.model("DocAttendence", attendanceSchema);

module.exports = Attendance;   //Compulsory