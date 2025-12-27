# ResumeSpark   
### AI-Powered Resume Builder & Career Roadmap Platform

ResumeSpark is a modern, **ATS-friendly resume builder** that combines clean, professional templates with **LLM-powered guidance** to help users create interview-ready resumes and structured career preparation plans.

It goes beyond resume building by offering **resume analysis**, **job description matching**, and **dream-role learning roadmaps** — all in one lightweight web app.

---

##  Key Features

###  LLM Resume Review
- Paste your resume text and receive **AI-generated feedback**
- Bullet-point suggestions on:
  - Clarity & structure  
  - Impact & wording  
  - Missing skills or details  
- Output shown in a clean, scrollable UI card

---

###  Resume ↔ Job Description Match
- Compare your resume against a target Job Description
- Get:
  - **Match percentage**
  - Missing keywords & skills
  - Actionable resume improvement suggestions
- Includes a **“Use Example JD”** button for quick testing

---

###  Dream-Role Roadmap Generator
- Enter any role (e.g. `SDE Intern at Meta`, `Senior Salesforce Developer`)
- Instantly receive:
  - 3-month structured learning roadmap
  - Required skills & recommended projects
  - Resources & preparation strategy
- One-click **Quick 3-Month Plan** for a condensed version

---

###  Resume Template Gallery
- Multiple ATS-friendly resume templates:
  - Classic  
  - Modern  
  - Tech  
  - Executive  
  - Student  
- One-click **Preview** opens template in a new tab
- Fully responsive **Tailwind CSS** design

---

## Tech Stack

### Frontend
- HTML  
- CSS  
- Tailwind CSS  
- Vanilla JavaScript  

### Backend
- Node.js  
- Express.js  

### AI Integration
- OpenAI Chat Completions API  
- Model: `gpt-4o-mini`  

---

##  Project Structure

```

resumespark/
├── frontend/
│   ├── index.html          # Landing page + AI tools
│   ├── templates/          # Resume templates
│   ├── assets/             # Images, icons
│   └── js/
│       └── app.js          # Frontend logic & API calls
│
├── backend/
│   ├── server.js           # Express server entry point
│   ├── routes/
│   │   ├── llm.js          # Resume review API
│   │   ├── match.js        # Resume ↔ JD match API
│   │   └── roadmap.js     # Dream-role roadmap API
│   └── package.json
│
├── .gitignore
└── README.md

````

---

##  Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/riyatyagi949/ResumeSpark.git
cd ResumeSpark
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
OPENAI_API_KEY=sk-your-key-here
PORT=5001
```

>  `.env` is already added to `.gitignore` to keep your API key secure.

Start the backend server:

```bash
npm start
# or
node server.js
```

Backend runs on:

```
http://localhost:5001
```

---

### 3️⃣ Frontend Setup

The frontend is built using plain HTML & JavaScript.

You can use **VS Code Live Server** or any static server.

Example using `serve`:

```bash
cd frontend
npx serve .
```

Open in browser:

```
http://127.0.0.1:5500/resumespark/frontend/index.html
```

---

##  How to Use

###  LLM Resume Review

1. Navigate to **LLM Resume Review**
2. Paste your resume text
3. Click **Run Review**
4. View AI feedback in a scrollable card

---

###  Resume ↔ Job Match

1. Open **Resume ↔ Job Match**
2. Paste the Job Description
3. Click **Analyze Match**
4. View:

   * Match percentage
   * Missing skills
   * Improvement suggestions

---

###  Dream-Role Roadmap

1. Enter your target role
2. Click **Generate Roadmap** for a detailed plan
3. Or select **Quick 3-Month Plan** for a compact roadmap

---

###  Template Preview

1. Scroll to **Templates**
2. Click **Preview**
3. View the resume template in a new browser tab

---

##  UI & Design Highlights

* Card-based layout for AI tools
* Scrollable response containers
* Mobile-friendly & responsive design
* Clean, minimal, ATS-focused UI

---

##  Future Enhancements

* Resume upload (PDF / DOCX parsing)
* Authentication & dashboard
* Resume export as PDF
* Dark mode support
* More customizable templates

---

##  Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:

   ```bash
   git commit -m "feat: add your feature"
   ```
4. Push to GitHub:

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request 

---


