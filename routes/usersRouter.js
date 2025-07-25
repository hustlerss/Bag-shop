const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("✅ Users route working!");
});
router.post('\register',async(req,res)=>{
    try{
        let{email,password,fullname} =req.body;

        let user =await usermodel.create({
            email,
            password,
            fullname,
        });
    } catch(err){
        console.log(err.message);
    }
})

module.exports = router;