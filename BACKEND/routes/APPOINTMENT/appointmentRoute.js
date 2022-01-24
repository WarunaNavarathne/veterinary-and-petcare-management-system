const router = require("express").Router(); //Import the router method of express package.
let Appointment = require("../../models/APPOINTMENT/appointmentModel.js");  //Import the student model created before.

router.route("/add").post((req, res)=>{
    const {queueNO, appointmentID, ownerName, address, email, NIC, ownerGender, tp, mobile, dateOfAppointment, animalCategory, animalBreed, animalAGE, animalName, animalGender, animalWeight, doctorID, diseases, specialNotes, confirmation} = req.body;

    const newAppointment = new Appointment({
        queueNO,
        appointmentID,
        ownerName,
        address,
        email,
        NIC,
        ownerGender,
        tp,
        mobile,
        dateOfAppointment,
        animalCategory,
        animalBreed,
        animalAGE,
        animalName,
        animalGender,
        animalWeight,
        doctorID,
        diseases,
        specialNotes,
        confirmation
    })
    newAppointment.save().then(()=>{    //newStudent.save() method passes the created object to mongodb database through the created model.
        res.json("Appointment placed.")  //A message is sent to the frontend in json format using the res object.
    }).catch((err)=>{
        console.log(err);
    })
})
router.route("/").get((req, res)=>{
    Appointment.find().then((appointments)=>{
        res.json(appointments)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {queueNO, appointmentID, ownerName, address, email, NIC, ownerGender, tp, mobile, dateOfAppointment, animalCategory, animalBreed, animalAGE, animalName, animalGender, animalWeight, doctorID, diseases, specialNotes, confirmation} = req.body;

    const updateAppointment = {
        queueNO, 
        appointmentID,
        ownerName,
        address,
        email,
        NIC,
        ownerGender,
        tp,
        mobile,
        dateOfAppointment,
        animalCategory,
        animalBreed,
        animalAGE,
        animalName,
        animalGender,
        animalWeight,
        doctorID,
        diseases,
        specialNotes,
        confirmation
    }
    const update = await Appointment.findByIdAndUpdate(userID, updateAppointment).then(() => {
        res.status(200).send({status: "Appointment updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})
router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await Appointment.findByIdAndDelete(userID).then(() => {
        res.status(200).send({status: "Appointment deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})
router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Appointment.findById(userID).then((user) => {
        res.status(200).send({status: "Appointment fetched", user: user})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get appointment", error: err.message});
    })
})
module.exports = router;