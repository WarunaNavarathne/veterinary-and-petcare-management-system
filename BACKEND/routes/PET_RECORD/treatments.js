//import the router function in the express package
const router = require("express").Router();

// need to use the model 'student' in the router file
//import that model
let Treatment = require("../../models/PET_RECORD/treatment.js");

//make the routes for the 4 cruds

//create

//http://localhost:8070/student/add
//if this backend url is called from the frontend then the route relevant to create is executed.

router.route("/add").post((req,res)=>{
    const treatmentID = req.body.treatmentID; 
    const petID = Number(req.body.petID);
    const pet_name =  req.body.pet_name;
    const breed =  req.body.breed;
    const pet_DOB =  req.body.pet_DOB;
    const owner_name =  req.body.owner_name;
    const owner_email=  req.body.owner_email;
    const owner_telNo =  req.body.owner_telNo;

    //this is an object named 'newStudent'
    const newTreatment = new Treatment({
        treatmentID,
        petID,
        pet_name,
        breed,
        pet_DOB,
        owner_name,
        owner_email,
        owner_telNo
    })

    //need to send the newStudent object to the database

    newTreatment.save().then(()=>{
        res.json("Treatment added")//send as a respose to the frontend in the jason format
    }).catch((err)=>{//if it become unsuccessful
        console.log(err);
    })


}) 

//need to see the details of the students that were added
//now we are going to create the route for that
router.route("/").get((req,res)=>{

    Treatment.find().then((treatment)=>{
        res.json(treatment)
    }).catch((err)=>{
        console.log(err)
    })

})

//update
//first find the one that should be updated
router.route("/update/:id").put(async(req, res) =>{
    let Id = req.params.id;
    const{treatmentID,petID,pet_name,breed,pet_DOB,owner_name,owner_email,owner_telNo} = req.body;

    const updateCheckup = {
        treatmentID,
        petID,
        pet_name,
        breed,
        pet_DOB,
        owner_name,
        owner_email,
        owner_telNo
    }

    const update = await Treatment.findByIdAndUpdate(userId, updateTreatment).then(()=>{
        res.status(200).send({status: "Treatment Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})//can also use post instead of put

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Treatment.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Treatment deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete Treatment",error:err.message});
    })
})

//fetch details of only one student
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await treatment.findById(userId).then(()=>{
        res.status(200).send({status: "results fetched", user: user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get results",error})
    })
})

module.exports = router;
//now done creating the route to add a student 