const router = require("express").Router();
let AddMat = require("../../models/LAB/AddNewMat");

router.route("/add").post((req,res)=>{

const Mname = req.body.Mname;
const MID = req.body.MID;
const quantity = Number(req.body.quantity);
const discription = req.body.discription;

const newMaterial = new AddMat({

  Mname,
  MID,
  quantity,
  discription

})
newMaterial.save().then(()=>{
    res.json("Successfully Added")
}).catch((err)=>{
console.log(err);

})

})
router.route("/").get((req,res)=>{
  AddMat.find().then((materials)=>{    
      res.json(materials)
  }).catch((err)=>{
      console.log(err)
  })


})



router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{Mname,MID,quantity,discription} = req.body;

const updateMaterial = {
    Mname,
    MID,
    quantity,
    discription
}
const update = await AddMat.findByIdAndUpdate(userId,updateMaterial).then(()=>{
    res.status(200).send({status :"User updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})

})


router.route("/delete/:id").delete(async (req,res) => {
let userId = req.params.id;

await AddMat.findByIdAndDelete(userId).then(() => {
    res.status(200).send({status: "User deleted"});

}).catch((err) => {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user",error: err.message});
})
})



router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await AddNewMat.findById(userId).then((addNewMat)=> {
        res.status(200).send({status: "User fetched", AddNewMat})
    
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


module.exports = router;