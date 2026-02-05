# 🚀 User Management App  
### Fully Extensible React CRUD Application  
**Configuration-driven • Production-ready • Scalable Architecture**

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-yellow?logo=vite)
![MaterialUI](https://img.shields.io/badge/MUI-7-blue?logo=mui)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

---

## 🔗 Live Demo
👉 **https://mugunthanm2k.github.io/User-Management-app**

## 🔗 Repo 
👉 *https://github.com/mugunthanm2k/User-Management-app.git*
---

## ✨ Overview

A **fully extensible, configuration-driven User Management System** built using modern React architecture.  
Designed to demonstrate **enterprise-level CRUD architecture**, **dynamic UI generation**, and **production-ready system design**.

> Config-based forms • Auto validation • Dynamic tables • Scalable structure

---

## 📸 Demo Flow

- 📝 **Add User** → Form Validation  
- 👥 **View Users** → Dynamic Table  
- ✏️ **Edit User** → Pre-filled Form  
- 🗑️ **Delete User** → Confirmation Dialog  
- ⚙️ **Extend Fields** → Auto UI + Validation + Table Update  

---

## ✅ Features

- Full CRUD Operations  
- Configuration-driven Forms  
- Dynamic Table Rendering  
- Auto Validation Engine  
- API Abstraction Layer  
- Loading States  
- Error Handling  
- Confirmation Dialogs  
- Responsive UI  
- Mock API Support  
- Real Backend Support (JSON-server)  
- GitHub Pages Compatible  

---

## 🏗️ Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend** | React 19, Vite |
| **UI** | Material-UI 7, Bootstrap 5, React-Bootstrap |
| **API** | Axios |
| **Backend (Mock)** | JSON-server |
| **Deployment** | GitHub Pages |
| **Architecture** | Config-driven CRUD |

---

## 🧠 Architecture
```
fieldsConfig.js 
↓ 
Dynamic Form Generator 
↓ 
Validation Engine 
↓ 
API Mapper 
↓ 
Dynamic Table Renderer
```

---

## ⚙️ Extensibility System

### ➕ Add New Field (2 Minutes)

**Step 1:** Edit `src/config/fieldsConfig.js`

```js
{
    name: 'age',
    label: 'Age',
    type: 'number',
    validation: {
        required: true,
        minLength: 1,
        pattern: /^[0-9]+$/,
        errorMessage: 'Age must be a valid number'
    }
}
```
Step 2: Done 🎉
```
✔ Form auto-renders
✔ Table auto-updates
✔ Validation auto-works
✔ API auto-maps
✔ No UI code changes needed
```
---

##🚀 Local Setup

📥 Clone & Install
```
git clone https://github.com/YOUR_USERNAME/User-Management-app.git
cd User-Management-app
npm install
```
▶️ Run with Mock API
```
npm run dev
```
▶️ Run with Real Backend
```
npm run dev:all
```
---

##🗄️ Sample db.json
```js
{
  "users": [
    {
      "id": "1",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "1234567890"
    }
  ]
}
```
---

📁 Project Structure
```txt
src/
├── api/           # API configuration
├── components/    # Reusable UI components
├── config/        # Field configuration
├── hooks/         # Custom React hooks
├── pages/         # Page components
└── App.jsx        # Root component
```
---

##🧩 Design Decisions
```
Hybrid UI → Material-UI + Bootstrap

Mock API → GitHub Pages compatible

Real API → JSON-server supported

Config-driven architecture

Clean separation of concerns

Scalable structure

Production-ready setup
```
---

##🚀 Deployment
```
npm install --save-dev gh-pages
npm run deploy
```
---

##👨‍💻 Author

Mugunthan M
Full Stack Developer

📧 Email: mugunthanm2k@gmail.com

🔗 GitHub: https://github.com/mugunthanm2k
