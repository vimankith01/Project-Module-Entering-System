const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String },
        email: { type: String, required: true },
    },
    { timestamps: true }
);


userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
  // return candidatePassword == this.password;
};

const User = mongoose.model("user", userSchema);

module.exports = User;