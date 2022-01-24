const router = require("express").Router();
let AddMat = require("../../models/LAB/AddNewMat");
const Labreport = require("../../models/LAB/Labreport");

router.route("/add").post((req,res)=>{

const PetName = req.body.PetName;
const PetindexNo = req.body.PetindexNo;
const OwnerName = req.body.OwnerName;
const OwnerContactNo = req.body.OwnerContactNo;
const Tests = req.body.Tests;
const TestedBy = req.body.TestedBy;
const TDate = req.body.TDate;

const newLabreport = new Labreport({

 PetName,
 PetindexNo,
 OwnerName,
 OwnerContactNo,
 Tests,
 TestedBy,
 TDate

})

newLabreport.save().then(()=>{
    res.json("Record Added")
}).catch((err)=>{
console.log(err);

})

})


router.route("/").get((req,res)=>{
  Labreport.find().then((labreports)=>{    
      res.json(labreports)
  }).catch((err)=>{
      console.log(err)
  })
})



router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{PetName,PetindexNo,OwnerName,OwnerContactNo,Tests,TestedBy,TDate} = req.body;

const updateLabreport = {
    PetName,
    PetindexNo,
    OwnerName,
    OwnerContactNo,
    Tests,
    TestedBy,
    TDate
}
const update = await Labreport.findByIdAndUpdate(userId,updateLabreport).then(()=>{
    res.status(200).send({status :"User updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})

})


router.route("/delete/:id").delete(async (req,res) => {
let userId = req.params.id;

await Labreport.findByIdAndDelete(userId).then(() => {
    res.status(200).send({status: "User deleted"});

}).catch((err) => {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user",error: err.message});
})
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Labreport.findById(userId).then((labreport)=> {
        res.status(200).send({status: "User fetched", Labreport})
    
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


module.exports = router;