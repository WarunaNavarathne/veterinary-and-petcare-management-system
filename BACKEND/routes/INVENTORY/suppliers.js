const router = require("express").Router();
let Supplier= require("../../models/INVENTORY/Supplier");

router.route("/").get((req,res)=>{
            
    Supplier.find()
        .then((suppliers)=> res.json(suppliers))
        .catch(err=>res.status(400).json('Error: '+err));            
        
});

router.route("/add").post((req,res)=>{
    const  Supplier_id = req.body.Supplier_id;
    const  Supplier_name = req.body.Supplier_name;
    const  company  = req.body.company ;
    const phoneNo = req.body.phoneNo;
    const  email  = req.body.email ;
    
    const newSupplier = new Supplier({
        Supplier_id,
        Supplier_name,
        company,
        phoneNo,
        email
        
    });

    newSupplier.save()
    .then(() => res.json("Supplier added"))
    .catch(err=> res.status(400).json('Error: '+err)); 
    });

    router.route("/update/:id").put(async(req,res) =>{
        let supplierId = req.params.id;
        const {Supplier_id, Supplier_name,company, phoneNo,email } = req.body;

        const updateSupplier = {
            Supplier_id,
            Supplier_name,
            company,
            phoneNo,
            email
        }

        const update = await Supplier.findByIdAndUpdate(supplierId, updateSupplier).then(()=>{
             res.status(200).send({status: "Supplier Update"})
        }).catch((err)=>{
                console.log(err);
                res.status(500).send({staus : "Error with updated data",error: err.message});
        })
    })

      router.route("/deletesupplier/:id").delete(async (req,res) => {
        let foodId = req.params.id;

            await Supplier.findByIdAndDelete(supplierId).then(() =>{
                    res.status(200).send({status: "Supplier Deleted"});
            }).catch((err) =>{
                    console.log(err.message);
                     res.status(500).send({status: "Error with deleted user", error: err.message});
            }) 
     })    

     
      router.route("/get/:id").get(async (req,res) => {
          
        let supplierId = req.params.id;
          
          const supplier = await Supplier.findById(supplierId).then((SupplierDetails)=>{
                    res.status(200).send({status : "Supplier Fetched",SupplierDetails })
          }).catch((err)=>{
                    console.log(err.message);
                    res.status(500).send({status: "Error with getting supplier", error: err.message})
          })
     }) 
  

module.exports = router;