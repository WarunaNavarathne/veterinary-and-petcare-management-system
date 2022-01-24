const router = require("express").Router();
let Medicine = require("../../models/INVENTORY/Medicine");

router.route("/").get((req,res)=>{
    Medicine.find()
        .then((medicine)=> res.json(medicine))
        .catch(err=> res.status(400).json('Error: '+err));
});

router.route("/add").post((req,res)=>{
    const item_No = req.body.item_No;
    const name = req.body.name;
    const quantity  = Number(req.body.quantity);
    const expired_Date = Date.parse(req.body.expired_Date);
    const brand = req.body.brand;
    

    const newMedicine = new Medicine({
        item_No,
        name,
        quantity,
        expired_Date,
        brand

    });

    newMedicine.save()
        .then(()=> res.json("Medicine added"))
        .catch(err=> res.status(400).json('Error: '+ err));
        
    }); 


    

    router.route("/update/:id").put(async(req,res) =>{
        let medicineId = req.params.id;
        const {item_No, name,quantity,expired_Date,brand } = req.body;

        const updateMedicine = {
            item_No,
            name,
            quantity,
            expired_Date,
            brand 
        }

        const update = await Medicine.findByIdAndUpdate(medicineId, updateMedicine).then(()=>{
             res.status(200).send({status: "Medicine Update"})
        }).catch((err)=>{
                console.log(err);
                res.status(500).send({staus : "Error with updated data",error: err.message});
        })
    })

      router.route("/delete/:id").delete(async (req,res) => {
        let medicineId = req.params.id;

        await Medicine.findByIdAndDelete(medicineId).then(() =>{
                res.status(200).send({status: "Medicine Deleted"});
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleted item", error: err.message});
          }) 
        })    

      router.route("/get/:id").get(async (req,res) => {
          let medicineId = req.params.id;
          const medicine = await Medicine.findById(medicineId).then((medicineDetails)=>{
                
                res.status(200).send({status : "Medicine Fetched",medicineDetails })
          }).catch((err)=>{
                   
                    console.log(err.message);
                    res.status(500).send({status: "Error with getting Medicine", error: err.message})
          })
      })  

module.exports = router;