const apiBase = "https://resumespark.onrender.com/";

document.addEventListener("DOMContentLoaded", () => {
  const runReview = document.getElementById("runReview");
  const runMatch = document.getElementById("runMatch");
  const runRoadmap = document.getElementById("runRoadmap");
  const exampleJD = document.getElementById("exampleJD");
  const shortPlan = document.getElementById("shortPlan");

  const reviewOutput = document.getElementById("reviewOutput");
  const reviewList = document.getElementById("reviewList");
  const matchOutput = document.getElementById("matchOutput");
  const matchList = document.getElementById("matchList");
  const roadmapOutput = document.getElementById("roadmapOutput");
  const roadmapList = document.getElementById("roadmapList");

  function renderBullets(container, listEl, text) {
    container.classList.remove("hidden");
    listEl.innerHTML = "";

    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0 && !/^#+\s*$/.test(l));

    lines.forEach((line) => {
      line = line.replace(/^[-*•]\s*/, "");
      line = line.replace(/^\d+\.\s*/, "");
      line = line.replace(/^#+\s*/, "");
      line = line.replace(/\*\*/g, "");

      const li = document.createElement("li");
      li.className = "leading-relaxed";
      li.textContent = line;
      listEl.appendChild(li);
    });
  }

  //  helper: safe JSON parsing
  async function safeJson(res) {
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) return null;
    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  //  LLM Resume Review – textarea
  if (runReview) {
    runReview.addEventListener("click", async () => {
      const text = document.getElementById("resumeText").value.trim();
      if (!text) return alert("Paste resume text");

      runReview.disabled = true;
      runReview.textContent = "Reviewing...";

      try {
        const res = await fetch(`${apiBase}/llm/review`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeText: text }),
        });

        const data = await safeJson(res);

        runReview.disabled = false;
        runReview.textContent = "Run Review";

        if (!res.ok) {
          alert((data && data.error) || `Server error: ${res.status}`);
          return;
        }

        renderBullets(reviewOutput, reviewList, data.summary || "");
      } catch (err) {
        runReview.disabled = false;
        runReview.textContent = "Run Review";
        console.error(err);
        alert("Network or server error. Check backend is running.");
      }
    });
  }

  //  Example JD
  if (exampleJD) {
    exampleJD.addEventListener("click", () => {
      const jdBox = document.getElementById("jobDesc");
      jdBox.value =
        "We are looking for a Software Development Engineer (SDE) intern with strong fundamentals in data structures and algorithms, proficiency in Java or Python, familiarity with web development, Git, databases, and basic cloud concepts. Good communication and problem-solving skills are required.";
    });
  }

  //  Resume ↔ Job Match
  if (runMatch) {
    runMatch.addEventListener("click", async () => {
      const jd = document.getElementById("jobDesc").value.trim();
      if (!jd) return alert("Paste job description");

      runMatch.disabled = true;
      runMatch.textContent = "Analyzing...";

      try {
        const res = await fetch(`${apiBase}/match`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jobDescription: jd }),
        });

        const data = await safeJson(res);

        runMatch.disabled = false;
        runMatch.textContent = "Analyze Match";

        if (!res.ok) {
          alert((data && data.error) || `Server error: ${res.status}`);
          return;
        }

        const text = `Match: ${data.score}\n\n${data.edits || ""}`;
        renderBullets(matchOutput, matchList, text);
      } catch (err) {
        runMatch.disabled = false;
        runMatch.textContent = "Analyze Match";
        console.error(err);
        alert("Network or server error. Check backend is running.");
      }
    });
  }

  //  Full Roadmap
  if (runRoadmap) {
    runRoadmap.addEventListener("click", async () => {
      const role = document.getElementById("dreamRole").value.trim();
      if (!role) return alert("Enter role");

      runRoadmap.disabled = true;
      runRoadmap.textContent = "Generating...";

      try {
        const res = await fetch(`${apiBase}/roadmap`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }),
        });

        const data = await safeJson(res);

        runRoadmap.disabled = false;
        runRoadmap.textContent = "Generate Roadmap";

        if (!res.ok) {
          alert((data && data.error) || `Server error: ${res.status}`);
          return;
        }

        renderBullets(roadmapOutput, roadmapList, data.plan || "");
      } catch (err) {
        runRoadmap.disabled = false;
        runRoadmap.textContent = "Generate Roadmap";
        console.error(err);
        alert("Network or server error. Check backend is running.");
      }
    });
  }

  //  Quick 3‑Month Plan
  if (shortPlan) {
    shortPlan.addEventListener("click", async () => {
      const roleInput =
        document.getElementById("dreamRole").value.trim() || "SDE intern";

      shortPlan.disabled = true;
      shortPlan.textContent = "Generating...";

      try {
        const res = await fetch(`${apiBase}/roadmap`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: `3 month plan for ${roleInput}` }),
        });

        const data = await safeJson(res);

        shortPlan.disabled = false;
        shortPlan.textContent = "Quick 3-Month Plan";

        if (!res.ok) {
          alert((data && data.error) || `Server error: ${res.status}`);
          return;
        }

        renderBullets(roadmapOutput, roadmapList, data.plan || "");
      } catch (e) {
        shortPlan.disabled = false;
        shortPlan.textContent = "Quick 3-Month Plan";
        alert("Network error: " + e.message);
      }
    });
  }
});
