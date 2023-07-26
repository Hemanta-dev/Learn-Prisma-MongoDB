const express = require('express');
const Register = require('../controller/registerUser');

const router = express.Router();

//router path
router.post('/register',Register);


module.exports=router;