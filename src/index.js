const express = require("express");
const cors = require("cors"); // ✅ Import once here
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./config/db");

const app = express();

// ✅ Configure CORS - Only once!
app.use(cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Connect MongoDB
connectDB();

// ✅ Routes
app.use("/api/chatbot", require("./routes/chatbotRoutes"));
app.use("/api/users", require("./routes/userRoutes"));  
app.use("/api/ml", require("./routes/mlRoutes"));   
app.use("/api/doctors", require("./routes/doctorRoutes"));

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// ✅ Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
