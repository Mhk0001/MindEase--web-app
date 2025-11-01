




const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const { authenticateToken } = require("../middleware/auth");

dotenv.config(); // Must be at the very top

const router = express.Router();

// ------------------------
// POST /api/ai-analysis/analyze
// ------------------------
router.post("/analyze", authenticateToken, async (req, res) => {
  try {
    const { journal, mood, stressLevel } = req.body;

    // Validate input
    if (!journal || mood == null || stressLevel == null) {
      return res.status(400).json({
        success: false,
        message: "Please provide journal, mood, and stressLevel.",
      });
    }

    // Debug: check if API key is loaded
    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({ success: false, message: "OpenRouter API key not found in environment variables." });
    }

    // Create AI prompt
    const prompt = `
You are a mental health assistant named MindEase.
Analyze the following user check-in and provide:
1. Emotional tone (positive, neutral, negative)
2. Supportive feedback
3. One or two practical suggestions
4. Positive affirmation

Journal: "${journal}"
Current mood: ${mood}/5
Stress level: ${stressLevel}/5
Respond in a warm, empathetic, and friendly tone with emojis.
`;

    // Call OpenRouter API
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini", // you can change to gpt-4o-mini, gpt-4o, claude-3
        messages: [
          { role: "system", content: "You are a helpful, empathetic mental health assistant." },
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Extract AI feedback
    const aiResponse = response.data.choices[0].message.content;

    res.status(200).json({
      success: true,
      feedback: aiResponse
    });

  } catch (error) {
    console.error("Error analyzing mood:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Error analyzing mood",
      error: error.response?.data?.error?.message || error.message
    });
  }
});

module.exports = router;
