import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";

import llmRouter from "./routes/llm.js";
import matchRouter from "./routes/match.js";
import roadmapRouter from "./routes/roadmap.js";

dotenv.config();
console.log("OPENAI prefix:", process.env.OPENAI_API_KEY?.slice(0, 15));

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

// AI routes
app.use("/api/llm", llmRouter);          // POST /api/llm/review
app.use("/api/match", matchRouter);      // POST /api/match
app.use("/api/roadmap", roadmapRouter);  // POST /api/roadmap

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
