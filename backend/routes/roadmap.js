import express from "express";
import OpenAI from "openai";

const router = express.Router();

router.post("/", async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key missing" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.openai.com/v1",
  });

  try {
    const { role } = req.body;
    if (!role) return res.status(400).json({ error: "Role required" });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a career mentor" },
        { role: "user", content: `Create a roadmap for ${role}` },
      ],
    });

    res.json({
      plan: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("ROADMAP ERROR:", err);
    res.status(500).json({ error: "Roadmap failed" });
  }
});

export default router;
