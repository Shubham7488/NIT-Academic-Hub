const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      // Only require password if not a Google user
      return !this.googleId;
    },
    default: "", // For Google users
  },
  googleId: {
    type: String,
    required: false,
    default: "", // Optional
  },
  photo: {
    type: String,
    default: "", // ✅ Store profile photo for Google users
  },
});

module.exports = mongoose.model("User", userSchema);
