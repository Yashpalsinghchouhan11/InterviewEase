# InterviewEase  
**AI-Powered Mock Interviews to Boost Your Confidence 🚀**  

InterviewEase is an innovative platform that helps job seekers **practice interviews in a realistic, AI-driven environment**. Users can simulate domain-based or resume-based interviews, answer via text/audio, and receive **personalized AI feedback** on correctness, clarity, and communication — making preparation smarter and more effective.  

---

## 🔥 Features  

### 🎯 Core Features  
- **Domain & Difficulty Based Interviews**: Select a role (e.g., Software Developer, Data Analyst, HR) and difficulty level (Easy, Medium, Advanced) to get tailored AI-generated questions.  
- **Resume-Based Interviews**: Upload your resume and get dynamic questions generated from your skills and experience.  
- **AI-Generated Questions**: Powered by **Google Gemini + LangChain**, generate 5–10 interview questions specific to your chosen role/level.  
- **Answer Recording (Audio + Text)**: Record your answers via audio, with automatic speech-to-text transcription.  
- **AI-Powered Feedback**:  
  - ✅ **Text Feedback**: AI evaluates correctness, clarity, and communication.  
  - 🎤 **Voice Feedback**: Detects hesitation, filler words, and confidence in your tone.  
  - ⭐ **Human-like Suggestions**: Encouraging, concise, and practical improvement tips.  
- **Answer Review**: Review your saved answers (text + audio) and AI feedback anytime.  
- **Secure Authentication**: JWT + session-based authentication for safe and smooth login.  

---

## 🛠️ Tech Stack  

- **Frontend**: React + Tailwind CSS  
- **Backend**: Django REST Framework  
- **Database**: MySQL  
- **AI/LLM**: Google Gemini via LangChain  
- **Authentication**: JWT (SimpleJWT) with session support  
- **Speech Processing**: MediaRecorder (frontend) + Python speech-to-text backend  

---

## ⚙️ How It Works  

1. **Sign Up/Login** → Secure JWT-based authentication.  
2. **Choose Interview Type**:  
   - **Domain-based** (with difficulty level)  
   - **Resume-based** (AI extracts questions from resume)  
3. **AI Generates Questions** → Gemini dynamically creates structured JSON questions.  
4. **Start the Interview**:  
   - Answer via text or audio recording.  
   - AI evaluates in real time.  
5. **Get AI Feedback**:  
   - **Tone**: Confident / Hesitant  
   - **Feedback**: Human-like overall review  
   - **Area of Improvement**: 1–2 key actionable tips  
6. **Review & Improve** → Access your past interviews, answers, and AI feedback anytime.  

---

## 🎯 Goals of the Project  
- Help candidates **practice in realistic interview scenarios**.  
- Provide **honest yet encouraging AI-driven feedback**.  
- Improve **confidence, clarity, and technical depth** before real interviews.  

---

## ⚙️ Setup and Installation  

### 🔑 Prerequisites  
- Node.js + npm / yarn  
- Python 3.9+  
- MySQL  
- Google Gemini API Key  

### 🚀 Frontend Setup  
```bash
git clone https://github.com/Yashpalsinghchouhan11/interviewEase.git
cd interviewEase/frontend
npm install
npm run dev
