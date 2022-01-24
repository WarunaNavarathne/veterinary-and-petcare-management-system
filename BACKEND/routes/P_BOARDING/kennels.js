const router = require("express").Router();
let Kennel = require("../../models/PET_BOARDING/Kennel");

router.route("/add").post((req,res)=>{
   
    const kennelname = req.body.kennelname;
    const kincharge = req.body.kincharge;
    const kstatus = req.body.kstatus;
    const ksize = req.body.ksize;
    const kpurpose = req.body.kpurpose;


    const newKennel = new Kennel({
         
         kennelname,
         kincharge,
         kstatus,
         ksize,
         kpurpose

}) 
  
newKennel.save().then(()=>{
   res.json("Kennel Added")
}).catch((err)=>{
  console.log(err);
})

})
 

router.route("/").get((req,res)=>{

  Kennel.find().then((kennels)=>{
      res.json(kennels)
  }).catch((err)=>{
      console.log(err);
  })

})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {kennelname, kincharge, kstatus, ksize, kpurpose} = req.body;

    const updateKennel = {
         kennelname,
         kincharge,
         kstatus,
         ksize,
         kpurpose
    }

    const update = await Kennel.findByIdAndUpdate(userId, updateKennel)
    .then(() => {
        res.status(200).send({status: "user updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
     
})

router.route("/delete/:id").delete(async (req, res) => {
 let userId = req.params.id;

 await Kennel.findByIdAndDelete(userId)
 .then(() => {
     res.status(200).send({status: "User deleted"});
 }).catch((errr) => {
    console.log(err.message);
    res.status(500).send({status:"Error with delete user", error: err.message});
 })
}) 

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Kennel.findById(userId)
    .then((kennel) => {
      res.status(200).send({status: "User fetched", kennel})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message });
    }) 
}) 

module.exports = router; 