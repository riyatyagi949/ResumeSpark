// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();

// router.post("/review", async (req, res) => {
//   if (!process.env.OPENAI_API_KEY) {
//     return res.status(500).json({ error: "OpenAI API key missing" });
//   }

//   try {
//     const { resumeText } = req.body;
//     if (!resumeText || resumeText.trim().length < 50) {
//       return res.status(400).json({ error: "Resume text required (min 50 chars)" });
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//       baseURL: "https://api.openai.com/v1",
//     });

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are an expert resume reviewer." },
//         {
//           role: "user",
//           content: `Review this resume and give concise bullet‑point feedback:\n${resumeText}`,
//         },
//       ],
//     });

//     res.json({
//       summary: completion.choices[0].message.content,
//       score: "80%",
//     });
//   } catch (err) {
//     console.error("LLM ERROR:", err);
//     res.status(500).json({ error: "LLM review failed" });
//   }
// });

// export default router;


import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/review", async (req, res) => {
  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "Groq API key missing" });
  }

  try {
    const { resumeText } = req.body;

    if (!resumeText || resumeText.trim().length < 50) {
      return res.status(400).json({ error: "Resume text required (min 50 chars)" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume reviewer. Give concise, practical bullet-point feedback on resume quality, ATS optimization, clarity, and improvements.",
        },
        {
          role: "user",
          content: `Review this resume and give concise bullet-point feedback:\n${resumeText}`,
        },
      ],
      temperature: 0.5,
      max_completion_tokens: 700,
    });

    res.json({
      summary: completion.choices[0]?.message?.content || "No review generated.",
      score: "80%",
    });
  } catch (err) {
    console.error("LLM ERROR:", err);
    res.status(500).json({ error: "LLM review failed" });
  }
});

export default router;
