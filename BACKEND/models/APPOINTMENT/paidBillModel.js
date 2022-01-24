//Defining Schema.
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const mongoose = require("mongoose");   //Importing mongoose package.
//import mongoose from 'mongoose';  //Test this when run.

const Schema = mongoose.Schema;

const billSchema = new Schema({
    appointmentID : {
        type: String,
        required: true,
        unique: true
    },
    doctorID : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: "Pending",
        required: true
    },
    amount : {
        type: Number,
        required: true
    },
})

//Creating a model.
//To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema).
const Attendance = mongoose.model("paidBill", billSchema);

module.exports = Attendance;   //Compulsory