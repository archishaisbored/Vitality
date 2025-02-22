// backend/src/controllers/mlController.js
const axios = require("axios");

exports.predictDisease = async (req, res) => {
    try {
        const { symptoms } = req.body;

        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ message: "Please provide symptoms as an array" });
        }

        const response = await axios.post(
            "http://127.0.0.1:8000/predict", 
            { symptoms },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 10000 
            }
        );

        res.status(200).json({ decoded_prediction: response.data.prediction });

    } catch (error) {
        console.error("❌ Error calling FastAPI Server:", error.message);

        if (error.response) {
            res.status(error.response.status).json({ message: error.response.data.detail || "Prediction error" });
        } else if (error.code === "ECONNREFUSED") {
            res.status(500).json({ message: "FastAPI server is not running or unreachable" });
        } else if (error.code === "ECONNABORTED") {
            res.status(500).json({ message: "Request to FastAPI server timed out" });
        } else {
            res.status(500).json({ message: "Prediction failed due to an unknown error" });
        }
    }
};
