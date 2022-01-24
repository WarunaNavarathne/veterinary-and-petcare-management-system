const router = require("express").Router();
let Trainingpet = require("../../models/PET_TRAINING/Trainingpet");

router.route("/add").post((req,res)=>{

    const petid = req.body.petid;
    const Petname = req.body.Petname;
    const Breed = req.body.Breed;
    const Age = req.body.Age;
    const Gender = req.body.Gender;
    const Ownername = req.body.Ownername;
    const nic = req.body.nic;
    const Phonenumber = req.body.Phonenumber;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const classname = req.body.classname;
    const Group = req.body.Group;
    const status = req.body.status;
    const Behaviour = req.body.Behaviour;
    const Vaccine = req.body. Vaccine;
    const Rdate = Date.parse(req.body. Rdate);

    const newPet = new Trainingpet({

        petid,
        Petname,
        Breed,
        Age,
        Gender,
        Ownername,
        nic,
        Phonenumber,
        Email,
        Address,
        classname,
        Group,
        status,
        Behaviour,
        Vaccine,
        Rdate

    })

    newPet.save().then(()=>{
        res.json("records Added")
    }).catch((err)=>{

      console.log(err);

    })


})
router.route("/").get((req,res)=>{
      
    Trainingpet.find().then((trainingpet)=>{
        res.json(trainingpet)

    }).catch((err)=>{
        console.log(err)

    })
})

//asyncronus function
router.route("/update/:id").put(async (req,res) => {
    let petID = req.params.id;
    const {petid,Petname,Breed,Age,Gender,Ownername,nic,Phonenumber,Email,Address,classname,Group,status,Behaviour,Vaccine,Rdate} = req.body;

    const updatePetdet ={
        petid,
        Petname,
        Breed,
        Age,
        Gender,
        Ownername,
        nic,
        Phonenumber,
        Email,
        Address,
        classname,
        Group,
        status,
        Behaviour,
        Vaccine,
        Rdate
    }

    const updatepet = await Trainingpet.findByIdAndUpdate(petID,updatePetdet).then(() => {
        res.status(200).send({status: "Details updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with updating data"});
    })

})

router.route("/delete/:id").delete(async (req,res) =>{
    let petID = req.params.id;

    await Trainingpet.findByIdAndDelete(petID).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "error with delete data"});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let petID = req.params.id;

   const getDetail = await Trainingpet.findById(petID).then((petdata) =>{
        res.status(200).send({status: "user fetched", petdata})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with get data"});
    })
})




module.exports = router;
