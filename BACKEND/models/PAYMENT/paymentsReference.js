const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fPaymentSchema = new Schema({

    serviceCode : {
        type : String,
        required: true
    },
    serviceName: {
        type : String,
        required: true
    },
    amount : {
        type: Number,
        required: true
    }

})

const fPayment = mongoose.model("servicePaymentReference",fPaymentSchema);

module.exports = fPayment;