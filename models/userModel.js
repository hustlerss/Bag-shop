const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect("mongodb://127.0.0.1:27017/bag-shop");


// Define user schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },



  createdAt: {
    type: Date,
    default: Date.now
  },
  contact:Number,

  picture:String,

  isadmin: Boolean,

  orders:{
    type:Array,
    default:[]
  },

});

// 🔐 Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// ✅ Password compare method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
