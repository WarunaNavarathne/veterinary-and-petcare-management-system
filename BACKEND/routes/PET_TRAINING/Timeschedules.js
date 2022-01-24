const router = require("express").Router();
let Timeschedule = require("../../models/PET_TRAINING/Timeschedule");

router.route("/add").post((req,res)=>{

    const Classname = req.body.Classname;
    const Group = req.body.Group;
    const Day= req.body.Day;
    const StartTime= req.body.StartTime;
    const EndTime= req.body.EndTime;
    const Trainer= req.body.Trainer;
    const Location= req.body.Location;

    const newSchedule = new Timeschedule({

        Classname,
        Group,
        Day,
        StartTime,
        EndTime,
        Trainer,
        Location
    })

    newSchedule.save().then(()=>{
        res.json("new schedule Added")
    }).catch((err)=>{

      console.log(err);

    })


   
})
router.route("/").get((req,res)=>{
      
    Timeschedule.find().then((timeschedule)=>{
        res.json(timeschedule)

     }).catch((err)=>{
        console.log(err)

    })
})

router.route("/update/:id").put(async (req,res) => {
    let groupID = req.params.id;
    const {Classname,Group,Day,StartTime,EndTime,Trainer,Location} = req.body;

    const updateSchedet ={
        Classname,
        Group ,
        Day,
        StartTime,
        EndTime,
        Trainer,
        Location
    }
    const updateT = await Timeschedule.findByIdAndUpdate(groupID,updateSchedet).then(() => {
        res.status(200).send({status: "schedule updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with updating data"});
    })

})
router.route("/delete/:id").delete(async (req,res) =>{
    let groupID = req.params.id;

    await Timeschedule.findByIdAndDelete(groupID).then(()=>{
        res.status(200).send({status: "schedule deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "error with delete data"});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let groupID = req.params.id;

   const getDetail = await Timeschedule.findById(groupID).then((scheduledata) =>{
        res.status(200).send({status: "schedule fetched", scheduledata})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with get data"});
    })
})

module.exports = router;