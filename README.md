# 🎨 DaVinci Studio

A full-stack AI image generation platform that allows users to create, explore, and manage AI-generated images using Hugging Face and Replicate APIs.

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [API Endpoints](#api-endpoints)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)

---

## ✨ Features

### Authentication
- ✅ User Registration with email validation
- ✅ User Login with JWT authentication
- ✅ Secure password hashing with bcryptjs
- ✅ Token-based authentication with cookies
- ✅ User session management

### Image Generation & Management
- 🖼️ Generate images using AI models (Hugging Face & Replicate)
- 📌 Save generated prompts and images
- ❤️ Like/favorite images
- 🔍 Explore gallery of generated images
- 📊 Track total images generated per user

### User Profile
- 👤 User profile with avatar
- 📈 Track generation history
- 🎯 User role management (user/admin)
- ✉️ Email-based registration and verification

### Frontend Pages
- 🏠 Home - Landing page with prompt generation
- 🔍 Explore - Browse and filter generated images
- 🔐 Login/Register - Authentication pages
- 📋 Privacy Policy & Terms & Conditions

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Routing:** React Router

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **AI APIs:** Hugging Face, Replicate
- **Dev Tools:** Nodemon, Morgan

### Database
- **MongoDB** with Mongoose schema validation
- **Collections:** Users, Prompts, Images

---

## 📁 Project Structure

```
DaVinci_Studio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/           # Reusable UI components
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   ├── PromptButton.jsx
│   │   │   │   ├── ImageGrid.jsx
│   │   │   │   └── ...
│   │   │   └── layout/           # Layout components
│   │   ├── pages/                # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Explore.jsx
│   │   │   └── ...
│   │   ├── services/             # API & Auth services
│   │   │   ├── auth.service.js
│   │   │   └── prompt.api.js
│   │   ├── api/                  # Axios instance
│   │   │   └── apiInstance.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes/
│   │       └── AppRoutes.jsx
│   ├── .env                      # Frontend environment variables
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── prompt.controller.js
│   │   ├── models/               # Database schemas
│   │   │   └── user.model.js
│   │   ├── routes/               # API routes
│   │   │   ├── auth.routes.js
│   │   │   └── prompt.routes.js
│   │   ├── services/             # Business logic
│   │   │   ├── auth.service.js
│   │   │   ├── huggingface.service.js
│   │   │   └── replicate.service.js
│   │   ├── middleware/           # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── config/               # Configuration files
│   │   │   ├── db.js            # MongoDB connection
│   │   │   └── jwt.js           # JWT configuration
│   │   ├── utils/                # Utility functions
│   │   │   ├── generateToken.js
│   │   │   └── hashPassword.js
│   │   └── app.js               # Express app setup
│   ├── index.js                 # Server entry point
│   ├── .env                     # Backend environment variables
│   └── package.json
│
└── README.md                    # Project documentation
```

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Frontend Setup

```bash
cd frontend
npm install
```

### Backend Setup

```bash
cd backend
npm install
```

---

## 🔐 Environment Setup

### Frontend (.env)
```env
VITE_BACKEND_SERVER_URL=http://localhost:5000/api
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key_here
REPLICATE_API_KEY=your_replicate_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key
NODE_ENV=development
```

**Where to get API keys:**
- [Hugging Face API Key](https://huggingface.co/settings/tokens)
- [Replicate API Key](https://replicate.com/account/api-tokens)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🚀 Running the Project

### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5174` (or available port)

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| GET | `/profile` | Get user profile (Protected) |

### Prompt Routes (`/api/prompt`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate` | Generate image using AI |
| GET | `/list` | Get user's prompts (Protected) |
| GET | `/:id` | Get specific prompt (Protected) |
| PUT | `/like/:id` | Like an image (Protected) |

### Request/Response Examples

**Register User**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Login User**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "user": { ... }
}
```

---

## 🔑 Key Features Implemented

### ✅ Completed
- User authentication system (Register/Login)
- JWT token generation and validation
- Secure password hashing
- MongoDB database integration
- User model with profile fields
- Express API structure
- Frontend routing and pages
- React form components with validation
- Axios API client setup

### 🔄 In Progress / TODO
- [ ] Image generation endpoints
- [ ] Image gallery/explore feature
- [ ] Like/favorite functionality
- [ ] Email verification
- [ ] Password reset feature
- [ ] User dashboard
- [ ] Admin panel
- [ ] Search and filter functionality
- [ ] Rate limiting
- [ ] Error handling improvements

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature-name`
5. Submit a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 💡 Tips

- Always run both frontend and backend servers during development
- Check the browser console (F12) for frontend errors
- Check terminal output for backend errors
- Use MongoDB Atlas dashboard to verify database changes
- Test API endpoints using Postman or similar tools

---

## 📞 Support

For issues or questions, please create an issue in the repository.

**Happy Coding! 🚀**