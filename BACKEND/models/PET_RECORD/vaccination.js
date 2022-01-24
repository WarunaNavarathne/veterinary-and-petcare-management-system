//import the mongoose package and assign it to a variable 
const mongoose = require('mongoose');

//form a schema
const Schema = mongoose.Schema; 

//create a object just ike in java
const vaccinationSchema = new Schema({
    /*prescriptionID : {
        type : String,
        require: true //the property 'name' should have a value if it is being added to the database(backend validation)
    },*/
    vaccineNo: {
        type: String,
        require: true
    },
    petID:{
        type: Number,
        required: true
    },
    vaccine_name: {
        type: String,
        require: true
    },
    pet_name: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        require: true
    },
    pet_DOB: {
        type: String,
        require: true
    },
    owner_name: {
        type: String,
        require: true
    },
    owner_email: {
        type: String,
        require: true
    },
    owner_telNo: {
        type: Number,
        require: true
    }
    //we send the data coming from routes to the database through the models
})

//"for this table we are sending this schema" just think
//schema is like a template given to the document in the database
//schema is added to the databse with the values we are giving
const Vaccination = mongoose.model("Vaccination", vaccinationSchema)
//first parameter is the table name and the second parameter is the schema

//need to export the module or else we cant use the student model in the routes
module.exports = Vaccination;