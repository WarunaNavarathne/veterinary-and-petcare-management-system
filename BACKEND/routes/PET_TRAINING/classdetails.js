const router = require("express").Router();
let Classdetail = require("../../models/PET_TRAINING/Classdetail");

router.route("/add").post((req,res)=>{

    const Classcode = req.body.Classcode;
    const Classname = req.body.Classname;
    const Duration = req.body.Duration;
    const requirement = req.body.requirement;
    const ClassFee = Number(req.body.ClassFee);

    const newClass = new Classdetail({

        Classcode,
        Classname,
        Duration,
        requirement,
        ClassFee
    })

    newClass.save().then(()=>{
        res.json("records Added")
    }).catch((err)=>{

      console.log(err);

    })

})
router.route("/").get((req,res)=>{
      
    Classdetail.find().then((classdetail)=>{
        res.json(classdetail)

    }).catch((err)=>{
        console.log(err)

    })
})

//asyncronus function
router.route("/update/:id").put(async (req,res) => {
    let classID = req.params.id;
    const {Classcode, Classname,Duration,requirement,ClassFee} = req.body;

    const updateClassdet ={
        Classcode, 
        Classname,
        Duration,
        requirement,
        ClassFee
    }

    const update = await Classdetail.findByIdAndUpdate(classID,updateClassdet).then(() => {
        res.status(200).send({status: "Details updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with updating data"});
    })

})

router.route("/delete/:id").delete(async (req,res) =>{
    let classID = req.params.id;

    await Classdetail.findByIdAndDelete(classID).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "error with delete data"});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let classID = req.params.id;

   const getDetail = await Classdetail.findById(classID).then((classdata) =>{
        res.status(200).send({status: "user fetched", classdata})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with get data"});
    })
})

module.exports = router;
