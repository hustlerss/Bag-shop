const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/test", (req, res) => {
  res.send("🚀 Owner test route is working!");
});


if (process.env.NODE_ENV === "development") {
 router.post("/create", async function (req, res) {
   console.log("🟢 POST /owners/create route hit");

   try {
     const owners = await ownerModel.find();
     console.log("🔍 Existing owners:", owners);

     if (owners.length > 0) {
       return res
         .status(503)
         .send("You don't have permission to create a new owner.");
     }

     const { name, email, password } = req.body;
     console.log("📥 Request body:", req.body);

     if (!name || !email || !password) {
       return res.status(400).send("All fields are required");
     }

     const createdOwner = await ownerModel.create({
       name,
       email,
       password,
     });

     console.log("✅ Owner created:", createdOwner);

     return res.status(201).send(createdOwner);
   } catch (err) {
     console.error("❌ Error creating owner:", err);
     return res.status(500).send("Server error");
   }
 });
}

router.get("/", (req, res) => {
  res.send("hey owners route check bro");
});

module.exports = router;