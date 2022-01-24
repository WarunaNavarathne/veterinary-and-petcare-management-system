const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    contactnumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
    
});

employeeSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

employeeSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

employeeSchema.methods.getSignedToken = function(){
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: "10min", 
    });
};

employeeSchema.methods.getResetPassordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    return resetToken;
}

module.exports = mongoose.model("Employee", employeeSchema);