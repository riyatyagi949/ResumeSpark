// import express from "express";
// import multer from "multer";
// import cors from "cors";
// import dotenv from "dotenv";

// import llmRouter from "./routes/llm.js";
// import matchRouter from "./routes/match.js";
// import roadmapRouter from "./routes/roadmap.js";

// dotenv.config();
// console.log("OPENAI prefix:", process.env.OPENAI_API_KEY?.slice(0, 15));

// const app = express();
// const upload = multer({ dest: "uploads/" });

// app.use(cors());
// app.use(express.json());

// // AI routes
// app.use("/api/llm", llmRouter);          // POST /api/llm/review
// app.use("/api/match", matchRouter);      // POST /api/match
// app.use("/api/roadmap", roadmapRouter);  // POST /api/roadmap

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("ResumeSpark Backend is running 🚀");
// });


import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";

import llmRouter from "./routes/llm.js";
import matchRouter from "./routes/match.js";
import roadmapRouter from "./routes/roadmap.js";

dotenv.config();

console.log(
  "GROQ_API_KEY prefix:",
  process.env.GROQ_API_KEY ? process.env.GROQ_API_KEY.slice(0, 15) : "Missing!"
);

const app = express();
const upload = multer({ dest: "uploads/" });

// Middleware first
app.use(
  cors({
    origin: [
      "http://localhost:5500",
      "https://resumespark-19.onrender.com",
    ],
  })
);

app.use(express.json());

// Health check first
app.get("/", (req, res) => {
  res.json({
    message: "ResumeSpark Backend 🚀",
    endpoints: ["/api/llm/review", "/api/match", "/api/roadmap"],
  });
});

// Routes
app.use("/api/llm", llmRouter);
app.use("/api/match", matchRouter);
app.use("/api/roadmap", roadmapRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));