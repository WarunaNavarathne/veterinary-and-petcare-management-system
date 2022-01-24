const express = require('express');
const { route } = require('./employee');
const router = express.Router();

const {
    login,
    forgotpassword,
    resetpassword
} = require('../../Controllers/USER/auth');

router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);


module.exports = router;
