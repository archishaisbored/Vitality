

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Doctor = require("../models/Doctor");
require("dotenv").config();

const doctors = [
    {
        name: "Dr. Ashok Seth",
        specialization: "Cardiology",
        phone: "+91 11 4713 5000",
        address: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
        image: "",
        source: "https://www.fortishealthcare.com/doctors/cardiologists-in-delhi"
    },
    {
        name: "Dr. Balbir Singh",
        specialization: "Cardiology",
        phone: "+91 11 2651 5050",
        address: "Max Super Speciality Hospital, Saket, New Delhi",
        image: "",
        source: "https://www.practo.com/delhi/cardiologist"
    },
    {
        name: "Dr. Atul Prasad",
        specialization: "Neurology",
        phone: "+91 11 3040 3040",
        address: "BLK-Max Super Speciality Hospital, Pusa Road, New Delhi",
        image: "",
        source: "https://www.blkmaxhospital.com/doctor/neurologists-in-delhi"
    },
    {
        name: "Dr. Rajiv Anand",
        specialization: "Neurology",
        phone: "+91 11 3040 3040",
        address: "BLK-Max Super Speciality Hospital, Pusa Road, New Delhi",
        image: "",
        source: "https://www.blkmaxhospital.com/doctor/neurologists-in-delhi"
    },
    {
        name: "Dr. Neeraj Kumar",
        specialization: "Physician",
        phone: "+91 11 2651 5050",
        address: "Max Super Speciality Hospital, Saket, New Delhi",
        image: "",
        source: "https://www.hexahealth.com/delhi/doctors/neurologist"
    },
    {
        name: "Dr. Veena Kalra",
        specialization: "Physician",
        phone: "+91 11 2651 5050",
        address: "Max Super Speciality Hospital, Saket, New Delhi",
        image: "",
        source: "https://www.hexahealth.com/delhi/doctors/neurologist"
    },
    {
        name: "Dr. Anil Kumar Kansal",
        specialization: "Orthopedics",
        phone: "+91 11 3040 3040",
        address: "BLK-Max Super Speciality Hospital, Pusa Road, New Delhi",
        image: "",
        source: "https://www.blkmaxhospital.com/doctor/neurologists-in-delhi"
    },
    {
        name: "Dr. Man Mohan Mehndiratta",
        specialization: "Orthopedics",
        phone: "+91 11 3040 3040",
        address: "BLK-Max Super Speciality Hospital, Pusa Road, New Delhi",
        image: "",
        source: "https://www.blkmaxhospital.com/doctor/neurologists-in-delhi"
    },
    {
        name: "Dr. Renu Achtani",
        specialization: "Dermatology",
        phone: "+91 11 4277 6222",
        address: "Fortis Hospital, Vasant Kunj, New Delhi",
        image: "",
        source: "https://www.fortishealthcare.com/doctors/location/delhi-ncr/neurology-31"
    },
    {
        name: "Dr. Kameshwar Prasad",
        specialization: "Dermatology",
        phone: "+91 11 4277 6222",
        address: "Fortis Hospital, Vasant Kunj, New Delhi",
        image: "",
        source: "https://www.fortishealthcare.com/doctors/location/delhi-ncr/neurology-31"
    }
];

const pushDoctors = async () => {
    try {
        await connectDB(); 
        await Doctor.deleteMany();
        console.log("🗑️ Existing doctors deleted");

        
        await Doctor.insertMany(doctors);
        console.log("✅ Doctors inserted successfully");

        mongoose.connection.close(); 
    } catch (error) {
        console.error("❌ Error inserting doctors:", error.message);
        mongoose.connection.close();
    }
};

pushDoctors();
