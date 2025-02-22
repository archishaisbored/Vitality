const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

router.post("/chat", chatbotController.getChatResponse);
module.exports = router;
