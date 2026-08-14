# 🚀 Eminenture — Full Stack MERN Application

A dynamic enterprise landing page with **real-time content management** powered by **Socket.io**, built with Next.js (frontend) and Express.js + MongoDB (backend).

---

## 📁 Project Structure

```
eminenture/
├── eminenture-frontend/   → Next.js 14 (Vercel pe deploy)
└── eminenture-backend/    → Express.js + MongoDB (Render pe deploy)
```

---

## ⚙️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | Next.js 14, TypeScript, Axios     |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB Atlas (Mongoose)           |
| Real-time | Socket.io (WebSocket)             |
| Hosting   | Vercel (frontend), Render (backend)|

---

## 🏁 Local Setup — Step by Step

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB Atlas account (ya local MongoDB)
- Git

---

### 1️⃣ Backend Setup (`eminenture-backend`)

```bash
# Step 1: Folder mein jao
cd eminenture-backend

# Step 2: Dependencies install karo
npm install

# Step 3: .env file banao
```

**`.env` file banao** (`eminenture-backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/eminenture
```

> ⚠️ `MONGODB_URI` mein apna MongoDB Atlas connection string daalo.

```bash
# Step 4: Server start karo
npm run dev
```

✅ Backend `http://localhost:5000` par chal raha hoga.

---

### 2️⃣ Frontend Setup (`eminenture-frontend`)

```bash
# Step 1: Folder mein jao
cd eminenture-frontend

# Step 2: Dependencies install karo
npm install

# Step 3: Dev server start karo
npm run dev
```

✅ Frontend `http://localhost:3000` par chal raha hoga.

> **Note:** API URL `services/api.ts` mein hardcoded hai:
> ```ts
> baseURL: "https://eminenture-backend.onrender.com"
> ```
> Local backend ke liye isko `http://localhost:5000` kar sakte ho.

---

## 🌐 Live URLs

| Service   | URL                                                                |
|-----------|--------------------------------------------------------------------|
| Frontend  | https://eminenture-frontend-w2f5.vercel.app                       |
| Backend   | https://eminenture-backend.onrender.com                           |
| Admin     | https://eminenture-frontend-w2f5.vercel.app/admin                 |

---

## 🛠️ Admin Panel — Content Update kaise karein

1. **Admin page open karo**: `/admin`
2. **Hero Title**, **Hero Subtitle**, **CTA Button Text** update karo
3. **Statistics** add, edit, ya remove karo
4. **"Update Content"** button click karo
5. ✅ Changes **automatically live website pe reflect** honge (Socket.io ke through — koi manual refresh nahi chahiye!)

---

## ⚡ Real-Time Update — Kaise kaam karta hai?

```
Admin → Content Update (PUT /api/content)
             ↓
    Backend: io.emit('content-updated')
             ↓
    Frontend Socket.io receives event
             ↓
        router.refresh() called
             ↓
    Next.js re-fetches fresh data from MongoDB
             ↓
    🎯 Website instantly update — NO page reload!
```

> **Why `force-dynamic`?**
> `export const dynamic = "force-dynamic"` `page.tsx` mein hai taaki Next.js page ko static cache na kare. Bina iske, build time ka cached data serve hota tha.

---

## 📡 API Endpoints

### Backend — `https://eminenture-backend.onrender.com`

| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | `/`            | Health check — "API is running..." |
| GET    | `/api/content` | Landing page ka content fetch karo |
| PUT    | `/api/content` | Content update karo (Admin use)    |

**PUT `/api/content` — Request Body:**
```json
{
  "heroTitle": "Transform Your Business",
  "heroSubtitle": "We build scalable solutions.",
  "ctaText": "Get Started",
  "stats": [
    { "label": "Clients", "value": "500+" },
    { "label": "Projects", "value": "1000+" }
  ]
}
```

---

## 🚀 Deployment

### Frontend → Vercel

```bash
# Code push karo — Vercel automatically deploy karega
git add .
git commit -m "your message"
git push origin master
```

> Vercel GitHub se connected hai — push karte hi auto-deploy hota hai.

### Backend → Render

```bash
# Code push karo — Render automatically deploy karega
git add .
git commit -m "your message"
git push origin master
```

> **Render Environment Variables** (Dashboard > Environment):
> ```
> PORT=5000
> MONGODB_URI=mongodb+srv://...
> ```

---

## 📦 Backend Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.9.2",
  "socket.io": "^4.x.x",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2"
}
```

## 📦 Frontend Dependencies

```json
{
  "next": "14.x",
  "react": "^18",
  "axios": "^1.x",
  "socket.io-client": "^4.x"
}
```

---

## 🔧 Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| Frontend content update nahi ho raha | `force-dynamic` already add hai `page.tsx` mein |
| CORS error aa raha hai | `server.js` mein apna Vercel URL `allowedOrigins` mein add karo |
| Socket connect nahi ho raha | Render pe backend deploy confirm karo, WebSocket support check karo |
| MongoDB connect nahi ho raha | `MONGODB_URI` environment variable Render dashboard mein set karo |
| `.env` file push nahi ho rahi | Sahi hai — `.gitignore` mein hai, Render dashboard mein manually set karo |

---

## 📂 Folder Structure (Frontend)

```
eminenture-frontend/
├── app/
│   ├── page.tsx               → Home page (force-dynamic, server component)
│   ├── layout.tsx             → Root layout
│   └── admin/
│       └── page.tsx           → Admin dashboard
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Footer.tsx
│   └── RealTimeRefresher.tsx  → Socket.io listener
└── services/
    └── api.ts                 → Axios instance + API functions
```

## 📂 Folder Structure (Backend)

```
eminenture-backend/
├── server.js                     → Entry point + Socket.io setup
├── config/
│   └── db.js                     → MongoDB connection
├── models/
│   └── Content.js                → Mongoose schema
├── controllers/
│   └── contentController.js      → GET/PUT logic + socket emit
└── routes/
    └── contentRoutes.js          → Express routes
```

---

## 👨‍💻 Development Tips

```bash
# Frontend build test karo (production jaisa)
cd eminenture-frontend
npm run build

# Backend logs dekho (Render Dashboard)
# Dashboard → eminenture-backend → Logs tab

# Local mein socket test karo
# Browser console mein dekho: "Socket connected: <id>"
```

---

*Made with ❤️ — Eminenture Enterprise Solutions*
