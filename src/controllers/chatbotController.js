const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1" 
});

exports.getChatResponse = async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ message: "User message is required" });
    }

    try {
        const response = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile", 
            messages: [{ role: "user", content: userMessage }],
            temperature: 0.7,
            max_tokens: 100
        });

        res.status(200).json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("❌ Error calling Groq API:", error.message || error);
        res.status(500).json({ message: "Failed to get a response from Groq API" });
    }
};
