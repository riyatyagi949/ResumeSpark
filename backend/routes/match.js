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
    const { jobDescription } = req.body;
    if (!jobDescription) {
      return res.status(400).json({ error: "Job description required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an ATS resume analyzer" },
        { role: "user", content: jobDescription },
      ],
    });

    res.json({
      score: "78%",
      edits: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("MATCH ERROR:", err);
    res.status(500).json({ error: "Job match failed" });
  }
});

export default router;
