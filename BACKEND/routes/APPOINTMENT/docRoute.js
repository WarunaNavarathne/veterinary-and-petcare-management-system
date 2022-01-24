const router = require("express").Router(); //Import the router method of express package.
let Attendance = require("../../models/APPOINTMENT/docModel.js");  //Import the student model created before.

router.route("/add").post((req, res)=>{
    const {docName, doctorID, arrival, date, noOfAppointments} = req.body;

    const newAttendance = new Attendance({
        docName,
        doctorID,
        arrival,
        date,
        noOfAppointments
    })
    newAttendance.save().then(()=>{    //newStudent.save() method passes the created object to mongodb database through the created model.
        res.json("Appointment placed.")  //A message is sent to the frontend in json format using the res object.
    }).catch((err)=>{
        console.log(err);
    })
})
router.route("/").get((req, res)=>{
    Attendance.find().then((docattendence)=>{
        res.json(docattendence)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Attendance.findById(userID).then((user) => {
        res.status(200).send({status: "Appointment fetched", user: user})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get appointment", error: err.message});
    })
})
module.exports = router;