Yeh README tumhare current project structure (frontend + backend + LLM tools) ke hisaab se likha gaya hai; seedha `README.md` me paste kar sakti ho aur baad me badges/additional links add kar lena.

```markdown
# ResumeSpark 🚀 – AI‑Powered Resume Builder

ResumeSpark is a modern, ATS‑friendly resume builder that combines clean templates with **LLM‑powered** guidance to help you create interview‑ready resumes and focused prep plans.

---

## ✨ Features

- **LLM Resume Review**  
  Paste your resume text and get AI feedback with bullet‑point suggestions on clarity, impact, and missing details.

- **Resume ↔ Job Description Match**  
  Paste a JD and see:
  - Match percentage  
  - Missing keywords/skills  
  - Suggested edits to better align your resume

- **Dream‑Role Roadmap**  
  Type a role (e.g. `SDE intern at Meta`, `Senior SDE Salesforce`) and get:
  - 3‑month learning roadmap  
  - Skills, projects, and resources  
  - Quick one‑click “3‑Month Plan” version

- **Template Gallery**  
  - Multiple resume templates (Classic, Modern, Tech, Executive, Student, etc.)  
  - One‑click **Preview** in a new tab  
  - Tailwind‑based responsive UI

- **Developer‑Friendly Stack**  
  - Frontend: HTML, CSS, Tailwind CSS, vanilla JS  
  - Backend: Node.js, Express  
  - AI: OpenAI Chat Completions API (`gpt-4o-mini` currently) [web:97]

---

## 📂 Project Structure

```
resumespark/
├── frontend/
│   ├── index.html          # Landing page + tools (LLM Review, Match, Roadmap)
│   ├── templates/          # Individual resume templates
│   ├── assets/             # Images, icons, preview assets
│   └── js/
│       └── app.js          # Frontend logic for AI tools
│
├── backend/
│   ├── server.js           # Express server entrypoint
│   ├── routes/
│   │   ├── llm.js          # LLM Resume Review route
│   │   ├── match.js        # Resume ↔ JD match route
│   │   └── roadmap.js      # Dream‑role roadmap route
│   └── package.json
│
├── .gitignore
└── README.md
```
[file:68]

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```
git clone https://github.com/riyatyagi949/ResumeSpark.git
cd ResumeSpark
```

### 2. Backend setup

```
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
OPENAI_API_KEY=sk-your-key-here
PORT=5001
```

> `.env` is already in `.gitignore` so your key won’t be committed. [web:86]

Start backend:

```
npm start
# or
node server.js
```

Backend will run on:  
`http://localhost:5001`

### 3. Frontend setup

Frontend is plain HTML/JS. Simplest way is to use VS Code Live Server or any static server.

From project root:

```
cd frontend
# Example using npx serve
npx serve .
```

Open in browser:

```
http://127.0.0.1:5500/resumespark/frontend/index.html
```

(Use whatever URL your static server shows.)

---

## 🚀 How to Use

### LLM Resume Review

1. Go to **LLM Resume Review** card.  
2. Paste your resume text in the textarea.  
3. Click **Run Review**.  
4. AI feedback appears in a small scrollable card as bullet points.

### Resume ↔ Job Match

1. Go to **Resume ↔ Job Match** card.  
2. Paste the target **Job Description**.  
3. Click **Analyze Match**.  
4. View:
   - Match percentage  
   - Missing skills / keywords  
   - Recommended edits in a scrollable box.

You can also click **Use Example JD** to quickly test the flow.

### Dream‑Role Roadmap

1. Go to **Dream‑Role Roadmap** card.  
2. Enter a role (e.g. `SDE intern at Meta`, `Senior SDE Salesforce`).  
3. Click **Generate Roadmap** for a detailed multi‑step roadmap.  
4. Or click **Quick 3‑Month Plan** for a condensed 3‑month plan.  

Both responses are shown in a compact, scrollable card.

### Templates Preview

1. Scroll to the **Templates** section.  
2. Each card shows:
   - Template name  
   - Short description  
   - Preview button.  
3. Click **Preview** to open that template in a new tab.

---

## 🔧 Tech Details

- **Frontend**
  - Tailwind CSS via CDN
  - Vanilla JavaScript for:
    - Tool interactions
    - Fetch calls to backend
    - Rendering scrollable bullet lists for AI output

- **Backend**
  - Express server exposing:
    - `POST /api/llm/review`
    - `POST /api/match`
    - `POST /api/roadmap`
  - Uses `OpenAI` Node client and Chat Completions API. [web:97]

- **Design**
  - Three AI tools visually aligned as cards
  - Consistent scrollable response sections
  - Mobile‑friendly layout

---

## 🧩 TODO / Future Improvements

- Resume upload + PDF/DOCX parsing for auto‑review.  
- Auth + dashboard for saving multiple resumes.  
- Export to PDF with layout‑aware templates.  
- More templates and dark‑mode support.

---

## 🤝 Contributing

Pull requests are welcome!  

1. Fork the repo.  
2. Create a feature branch: `git checkout -b feature/xyz`.  
3. Commit changes: `git commit -m "feat: add xyz"`.  
4. Push the branch: `git push origin feature/xyz`.  
5. Open a PR on GitHub.

---

