const router = require("express").Router();
let Food = require("../../models/INVENTORY/Food");

router.route("/").get((req,res)=>{
    Food.find()
        .then(foods=> res.json(foods))
        .catch(err=>res.status(400).json('Error:'+err));
        
});


router.route("/add").post((req,res)=>{
 
    const item_No = req.body.item_No;
    const name = req.body.name;
    const quantity  = Number(req.body.quantity);
    const expired_Date = Date.parse(req.body.expired_Date);
    const brand = req.body.brand;
    

    const newFood = new Food({
        item_No,
        name,
        quantity,
        expired_Date,
        brand 
       

    });

    newFood.save()
        .then(()=> res.json("Food added"))
        .catch(err=>res.status(400).json('Error:' + err));
        
    });
    

    router.route("/update/:id").put(async(req,res) =>{
        let foodId = req.params.id;
        const {item_No, name,quantity,expired_Date,brand } = req.body;

        const updateFood = {
            item_No,
            name,
            quantity,
            expired_Date,
            brand 
        }

        const update = await Food.findByIdAndUpdate(foodId, updateFood).then(()=>{
             res.status(200).send({status: "Food Update"})
        }).catch((err)=>{
                console.log(err);
                res.status(500).send({staus : "Error with updated data",error: err.message});
        })
    })

      router.route("/delete/:id").delete(async (req,res) => {
        let foodId = req.params.id;

        await Food.findByIdAndDelete(foodId).then(() =>{
                res.status(200).send({status: "Food Deleted"});
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleted item", error: err.message});
          }) 
        })    

      router.route("/get/:id").get(async (req,res) => {
          let foodId = req.params.id;
          const food = await Food.findById(foodId).then((foodDetails)=>{
                
                res.status(200).send({status : "food Fetched",foodDetails })
          }).catch((err)=>{
                   
                    console.log(err.message);
                    res.status(500).send({status: "Error with getting Food", error: err.message})
          })
      })  

     
   

module.exports = router;