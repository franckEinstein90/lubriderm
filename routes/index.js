const express = require('express')
const router = express.Router();



router.get('/', function (req, res){
    res.render('home', {loginState: "Login"});
});

module.exports = router;
