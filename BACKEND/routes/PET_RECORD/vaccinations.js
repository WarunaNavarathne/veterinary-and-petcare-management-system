//import the router function in the express package
const router = require("express").Router();

let Vaccination = require("../../models/PET_RECORD/vaccination.js");
// need to use the model 'student' in the router file
//import that model
//let Prescription = require("../models/prescription")

//make the routes for the 4 cruds

//create

//http://localhost:8070/student/add
//if this backend url is called from the frontend then the route relevant to create is executed.

router.route("/add").post((req,res)=>{
    const vaccineNo = req.body.vaccineNo; 
    const petID = Number(req.body.petID);
    const vaccine_name =  req.body.vaccine_name;
    const pet_name =  req.body.pet_name;
    const breed =  req.body.breed;
    const pet_DOB =  req.body.pet_DOB;
    const owner_name =  req.body.owner_name;
    const owner_email =  req.body.owner_email;
    const owner_telNo =  req.body.owner_telNo;

    //this is an object named 'newStudent'
    const newVaccination = new Vaccination({
        vaccineNo,
        petID,
        vaccine_name,
        pet_name,
        breed,
        pet_DOB,
        owner_name,
        owner_email,
        owner_telNo
    })

    //need to send the newStudent object to the database

    newVaccination.save().then(()=>{
        res.json("Vaccination added")//send as a respose to the frontend in the jason format
    }).catch((err)=>{//if it become unsuccessful
        console.log(err);
    })


}) 

//need to see the details of the students that were added
//now we are going to create the route for that
router.route("/").get((req,res)=>{

    Vaccination.find().then((vaccination)=>{
        res.json(vaccination)
    }).catch((err)=>{
        console.log(err)
    })

})

//update
//first find the one that should be updated
router.route("/update/:id").put(async(req, res) =>{
    let prescriptionID = req.params.id;
    const{petID,pet_name,breed,pet_DOB,owner_name,owner_email,owner_telNo} = req.body;

    const updatePrescription = {
       // prescriptionID,
        petID,
        pet_name,
        breed,
        pet_DOB,
        owner_name,
        owner_email,
        owner_telNo 
    }


    const update = await Vaccination.findByIdAndUpdate(prescriptionID, updatePrescription).then(()=>{
        res.status(200).send({status: "Vaccination Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})//can also use post instead of put

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let prescriptionID = req.params.id;

    await Vaccination.findByIdAndDelete(prescriptionID).then(()=>{
        res.status(200).send({status: "prescription deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete prescription",error:err.message});
    })
})

//fetch details of only one student
router.route("/get/:id").get(async(req,res)=>{
    let prescriptionID = req.params.id;
    await Vaccination.findById(prescriptionID).then(()=>{
        res.status(200).send({status: "Vaccination fetched", user: user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get prescription",error})
    })
})

module.exports = router;
//now done creating the route to add a student 