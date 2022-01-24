const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sPaymentSchema = new Schema({

    sName : {
        type : String,
        required: true
    },
    oName: {
        type : String,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount : {
        type: Number,
        required: true
    }

})

const sPayment = mongoose.model("servicePayment",sPaymentSchema);

module.exports = sPayment;