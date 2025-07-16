const express = require ('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey owners route check bro");
});

module.exports = router;