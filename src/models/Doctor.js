
const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String },
    source: { type: String }
});

module.exports = mongoose.model("Doctor", DoctorSchema);
