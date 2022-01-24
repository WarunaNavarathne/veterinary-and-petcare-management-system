const router = require("express").Router();
let Boardpet = require("../../models/PET_BOARDING/Boardpet");

router.route("/add").post((req,res)=>{

 const boardid = req.body.boardid;
 const bpname = req.body.bpname;
 const boname = req.body.boname;
 const bomail = req.body.bomail;
 const bocontact = req.body.bocontact;
 const bkennel = req.body.bkennel;
 const bpdate = Date.parse(req.body.bpdate);
 const bnday = Number(req.body.bnday); 

const newBoardpet = new Boardpet({

     boardid,
     bpname,
     boname,
     bomail,
     bocontact,
     bkennel,
     bpdate,
     bnday


})

newBoardpet.save().then(()=>{
    res.json("Boardpet Added")
}).catch((err)=>{
  console.log(err);
})


}) 

router.route("/").get((req,res)=>{

  Boardpet.find().then((boardpets)=>{
      res.json(boardpets)
  }).catch((err)=>{
      console.log(err)
  })

})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {boardid, bpname, boname, bomail, bocontact, bkennel, bpdate, bnday} = req.body;

    const updateBoardpet = {
    
     boardid,
     bpname,
     boname,
     bomail,
     bocontact,
     bkennel, 
     bpdate,
     bnday

    }

    const update = await Boardpet.findByIdAndUpdate(userId, updateBoardpet)
    .then(() => {
        res.status(200).send({status: "user updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
     
})
router.route("/delete/:id").delete(async (req, res) => {
 let userId = req.params.id;

 await Boardpet.findByIdAndDelete(userId)
 .then(() => {
     res.status(200).send({status: "User deleted"});
 }).catch((errr) => {
    console.log(errr.message);
    res.status(500).send({status:"Error with delete user", error: errr.message});
 })
}) 

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Boardpet.findById(userId)
    .then((boardpet) => {
      res.status(200).send({status: "User fetched", boardpet})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message });
    }) 
}) 




module.exports = router;