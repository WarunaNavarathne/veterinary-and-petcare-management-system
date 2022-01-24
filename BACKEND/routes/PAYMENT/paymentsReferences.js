const router = require("express").Router();
let fpay = require("../../models/PAYMENT/paymentsReference");


router.route("/add").post((req,res)=>{

    const serviceCode = req.body.serviceCode;
    const serviceName = req.body.serviceName;
    const amount = Number(req.body.amount);

    const newfPayment = new fpay({
        serviceCode,
        serviceName,
        amount
    })

    newfPayment.save().then(()=>{
        res.json("New service payment added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    fpay.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let fpaymentid = req.params.id;
    const {serviceCode,serviceName,amount} = req.body;

    const updatePayment = {
        serviceCode,
        serviceName,
        amount
    }

    const update = await fpay.findByIdAndUpdate(fpaymentid, updatePayment).then(()=>{
        res.status(200).send({status:"payment reference updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"})
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let fpaymentid = req.params.id;
    await fpay.findByIdAndDelete(fpaymentid).then(()=>{
        res.status(200).send({status:"payment reference deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message})
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let fpaymentid = req.params.id;
    const user = await fpay.findById(fpaymentid).then(()=>{
        res.status(200).send({status:"payment reference fetched", user: user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting data", error: err.message})
    })
})

module.exports = router;