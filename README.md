<<<<<<< HEAD
# 💼 ATS Resume Builder

> **A fully functional, AI-powered resume builder built with React, Firebase, Gemini AI, Node.js, and MongoDB.**

This project empowers users to create professional, ATS-friendly resumes tailored to their career goals. Whether you're a fresher or an experienced professional, this platform offers guided resume creation, AI-generated summaries, resume scoring, and clean PDF exports — all wrapped in a modern, responsive UI.

---

🎯 **[🚀 Live Demo](https://sd-resume-builder.vercel.app/)**  
🔗 https://sd-resume-builder.vercel.app/

## 🔐 Admin Access

**Admin Panel:** [https://sd-resume-builder.vercel.app/admin/login](https://sd-resume-builder.vercel.app/admin/login)



**To create admin user locally:**
```bash
cd backend
npm run create-admin
```

## 🚀 Why This Project?

Many job seekers struggle to craft a resume that is both professional and ATS-compliant. This tool solves that by:

- 🧠 Using **AI** to generate personalized summaries.
- 🧾 Parsing uploaded resumes for quick editing.
- 📊 Scoring resumes against job descriptions for better targeting.
- 📄 Offering a clean PDF output ready for applications.

---

## 🎯 Key Features

- 🔐 **User Authentication**: Sign in using Google or email/password (via Firebase).
- 🧑‍🎓 **Smart Resume Builder**: Dynamic form flows for freshers and experienced users.
- 🧠 **AI Summary Generator**: Uses Google Gemini to craft compelling summaries.
- 📄 **PDF Export**: Download your resume in a beautifully formatted, clean PDF layout.
- 📥 **Resume Parsing**: Upload an existing resume to extract data and reuse it.
- 📊 **Resume Scoring**: Get an AI-backed score based on job descriptions.
- 📬 **Feedback Submission**: Users can send direct feedback (EmailJS + MongoDB).
- 👨‍💼 **Admin Dashboard**: Complete admin panel for user and content management.
- 🔑 **Password Reset**: Functional forgot password with email notifications.
- 🧩 **Modular Codebase**: Clean separation between frontend and backend logic.
- 🌐 **Fully Responsive UI**: Built using Material UI for a sleek and modern experience.

---

## 🧰 Tech Stack

| Layer         | Technology Used                                           |
|---------------|-----------------------------------------------------------|
| 🎨 Frontend    | React (CRA), Firebase Auth, Material UI                  |
| 🧠 AI Engine   | Gemini Flash API (Google Generative AI)                  |
| 🖥️ Backend     | Node.js, Express.js, MongoDB, JWT                        |
| 📤 PDF Export  | html-pdf-node, PDF Text Parser                           |
| 📬 Feedback    | EmailJS + Nodemailer                                     |
| 👨‍💼 Admin      | JWT Authentication, Role-based Access Control            |

---

## 📁 Project Structure

```
ats-resume-builder/
│
├── backend/
│   ├── controllers/    # API Logic (Resume, Auth, AI, Admin)
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # Express Routes
│   ├── middleware/     # Auth, Error Handling
│   ├── scripts/        # Admin Creation Script
│   └── utils/          # PDF Parser, AI Prompts, Helpers
│
├── frontend/
│   ├── public/         # Static Files
│   └── src/
│       ├── components/ # Reusable UI Components
│       ├── pages/      # Route-based Pages
│       ├── context/    # Global State (Auth/User)
│       ├── firebase/   # Firebase Config & Logic
│       └── helper/     
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sandeepdara-sd/ATS_Resume_Builder.git
cd ATS_Resume_Builder
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3️⃣ Environment Setup

#### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env)
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

### 4️⃣ Create Admin User

```bash
cd backend
npm run create-admin
```

---

## 💻 Run the App

You can run the frontend and backend together or separately:

### 🧪 Option 1: Run Separately

**Backend**

```bash
cd backend
npm start
```

**Frontend**

```bash
cd frontend
npm start
```

---

## 🔧 Fixed Issues

### ✅ Admin Credentials
- **Email:** `admin@resumebuilder.com`
- **Password:** `admin123`
- Added script to create admin user: `npm run create-admin`

### ✅ Forgot Password Functionality
- Fixed email sending with proper HTML templates
- Added fallback for development (logs reset URL)
- Improved error handling and user feedback
- Added proper token validation and expiration

### ✅ Resume Download PDF Formatting
- Fixed PDF generation to match preview exactly
- Improved responsive design for different content lengths
- Added dynamic font sizing based on content volume
- Enhanced spacing and layout consistency
- Fixed template rendering issues

---

## 🌍 Live Deployment

✨ Your app is live here:  
🔗 **[https://sd-resume-builder.vercel.app/](https://sd-resume-builder.vercel.app/)**

Deployed using **Vercel** for the frontend and **Render/MongoDB Atlas** for backend/database.

---

## 📌 Use Cases

- 🧑‍🎓 **Freshers**: Quickly generate a professional resume with AI help.
- 💼 **Working Professionals**: Score resumes against job descriptions to increase chances.
- 📝 **Resume Review Services**: Extract content, improve, and export with ease.
- 📤 **Job Portals**: Integrate AI scoring as an enhancement.
- 👨‍💼 **HR Teams**: Admin dashboard for user management and analytics.

---

## 🔑 Email Configuration

For forgot password functionality, configure these environment variables:

```env
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

**To get Gmail App Password:**
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security > App Passwords
3. Generate a new app password for "Mail"
4. Use this password in the `EMAIL_PASS` environment variable

---

## 👨‍💻 Author

Made with ❤️ by **Sandeep Dara**  
📧 sandeepdara44@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/sandeep-dara-1b0a23242/)  
🌐 [Portfolio](https://sd-portfoilo.vercel.app/)

---

## 🌟 Support This Project

If you find this useful, please consider ⭐ starring the repo and sharing it with your friends. It helps a lot!

---

## 📃 License

This project is licensed under the MIT License.
=======
# ats-resume-builder
>>>>>>> 179a33fcc1c5bb15c78a8e675834f9a6d482a3958
