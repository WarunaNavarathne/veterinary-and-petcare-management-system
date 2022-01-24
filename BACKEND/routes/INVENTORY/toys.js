const router = require("express").Router();
let Toy = require("../../models/INVENTORY/Toy");


router.route("/").get((req,res)=>{
    Toy.find()
    .then(toys => res.json(toys))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route("/add").post((req,res)=>{
    const item_No = req.body.item_No;
    const name = req.body.name;
    const quantity  = Number(req.body.quantity);
    const brand = req.body.brand;
    

    const newToy = new Toy({
        item_No,
        name,
        quantity,
        brand
     });

    newToy.save()
    .then(()=> res.json('Toy Item added'))
    .catch((err)=>res.status(400).json('Error:'+err)) ;

});


router.route("/update/:id").put(async(req,res) =>{
    let toyId = req.params.id;
    const {item_No,name,quantity,brand } = req.body;

    const updateToy = {
        item_No,
        name,
        quantity,
        brand 
    }

    const update = await Toy.findByIdAndUpdate(toyId, updateToy).then(()=>{
         res.status(200).send({status: "Toy Update"})
    }).catch((err)=>{
            console.log(err);
            res.status(500).send({staus : "Error with updated data",error: err.message});
    })
})

  router.route("/delete/:id").delete(async (req,res) => {
    let toyId = req.params.id;

    await Toy.findByIdAndDelete(toyId).then(() =>{
            res.status(200).send({status: "Toy Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleted item", error: err.message});
      }) 
    })    

  router.route("/get/:id").get(async (req,res) => {
      let toyId = req.params.id;
      const toy = await Toy.findById(toyId).then((toyDetails)=>{
            
            res.status(200).send({status : "Toy Fetched",toyDetails})
      }).catch((err)=>{
               
                console.log(err.message);
                res.status(500).send({status: "Error with getting Toy", error: err.message})
      })
  })  

  

module.exports = router;