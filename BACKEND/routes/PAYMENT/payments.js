const router = require("express").Router();
let pay = require("../../models/PAYMENT/payment");


router.route("/add").post((req,res)=>{

    const sName = req.body.sName;
    const oName = req.body.oName;
    const pName = req.body.pName;
    const date = Date.parse(req.body.date);
    const amount = Number(req.body.amount);

    const newPayment = new pay({
        sName,
        oName,
        pName,
        date,
        amount
    })

    newPayment.save().then(()=>{
        res.json("payment added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    pay.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let paymentid = req.params.id;
    const {sName,oName,pName,date,amount} = req.body;

    const updatePayment = {
        sName,
        oName,
        pName,
        date,
        amount
    }

    const update = await pay.findByIdAndUpdate(paymentid, updatePayment).then(()=>{
        res.status(200).send({status:"payment updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"})
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let paymentid = req.params.id;
    await pay.findByIdAndDelete(paymentid).then(()=>{
        res.status(200).send({status:"payment deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message})
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let paymentid = req.params.id;
    const user = await pay.findById(paymentid).then(()=>{
        res.status(200).send({status:"payment fetched", user: user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting data", error: err.message})
    })
})

module.exports = router;
