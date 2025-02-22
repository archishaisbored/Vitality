const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true 
});

module.exports = mongoose.model("User", UserSchema);
