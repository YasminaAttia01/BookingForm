# Booking Form Test – Yasmina Attia 🧾

This project is a **technical test** to build a responsive and accessible booking form using **React** and **Docker**. It demonstrates client-side validation, containerized development, and basic testing — without relying on UI libraries.

---

## 🧩 Features

- ✅ Full Name and Email (required)
- ✅ Full Name must be at least 4 characters and letters-only
- ✅ Valid Email format
- ✅ Booking date must not be in the past
- ✅ Optional number of guests
- ✅ Success message upon valid submission
- ✅ Accessible with ARIA roles/attributes
- ✅ Docker-ready with live reload (Vite + volume mounting)
- ✅ Unit test using **Jest** + **React Testing Library**

---

## 🐳 Docker Setup

Make sure you have **Docker** and **Docker Compose** installed.

### 1. 🔧 Build and start the app

```bash
docker-compose up --build
🧠 This will run the app on http://localhost:5173

2. 🛠️ Enable Hot Reload (already configured)
Your changes in the frontend source files will instantly reload the app inside the container thanks to the volume mount:

volumes:
  - ./frontend:/app
  - /app/node_modules
🧪 Testing
This project includes a test file to validate form logic.

To run the test:

cd frontend
npm install
npm test
The test covers:

Form rendering

Required field errors

Valid form submission

🛠️ Technologies Used
React (with Hooks)

Vite (for lightning-fast dev server)

Jest & React Testing Library

Node.js 20

Docker & Docker Compose

💡 Approach
The form is built with native HTML/CSS, no UI libraries

Validations are handled using custom logic (useEffect)

Accessibility was considered: all fields use aria-* attributes and role annotations

Docker ensures consistent and isolated local development

A simple, readable folder structure allows fast onboarding

🤖 AI Tools Disclosure
ChatGPT was used to assist with:

README structuring

All code has been reviewed, edited, and adapted manually by Yasmina Attia.

📂 Project Structure
booking-form/
├── frontend/
│   ├── src/
│   │   └── BookingForm.jsx
│   │   └── BookingForm.test.jsx
│   ├── public/
│   ├── Dockerfile
├── docker-compose.yml
└── README.md