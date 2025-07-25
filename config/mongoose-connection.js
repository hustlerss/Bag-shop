const mongoose =require ('mongoose');
const dbgr =require("debug")("development:mongoose");
const config = require("config");
console.log("📡 Connecting to MongoDB URI:", config.get("MONGODB_URI"));


mongoose
  .connect(`${config.get("MONGODB_URI")}/bag-shop`)
  .then(function () {
    dbgr("✅ Mongoose connected (via debug)");
    console.log("✅ Mongoose connected (via console.log)");
  })
  .catch(function (err) {
    console.error("❌ Mongoose connection error:", err);
  });