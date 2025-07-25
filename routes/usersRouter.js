const express = require('express');
const router = express.Router();
const usermodel = require('../models/userModel');

router.get('/', (req, res) => {
    res.send("✅ Users route working!");
});

router.post('/register', async function (req, res) {
    try {
        const { email, password, fullname } = req.body;
        const user = await usermodel.create({ email, password, fullname });
        res.send(user);
    } catch (err) {
        console.error("❌ Error registering user:", err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;