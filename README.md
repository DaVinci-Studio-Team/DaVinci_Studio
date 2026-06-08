```markdown
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
- 📀 Track generation history
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

## 🌐 API Endpoints & Responses

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | ❌ | Register new user |
| POST | `/login` | ❌ | User login |
| GET | `/me` | ✅ | Get current user profile |

### Image Routes (`/api/image`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/upload` | ✅ | Upload generated image |
| GET | `/me` | ✅ | Get user's images |
| GET | `/community` | ❌ | Get all community images |

### Response Examples

**Register User**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
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
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

**Generate Image**
```json
POST /api/prompt/generate
{
  "prompt": "A futuristic city with neon lights",
  "style": "Cyberpunk",
  "numImages": 1
}

Response:
{
  "success": true,
  "images": [
    {
      "id": "image_id",
      "imageUrl": "base64_image_data",
      "prompt": "A futuristic city with neon lights",
      "style": "Cyberpunk",
      "modelUsed": "HuggingFace Stable Diffusion 3 Medium",
      "createdAt": "2026-06-08T10:30:00Z"
    }
  ]
}
```

**Get User Images**
```json
GET /api/image/me

Response:
{
  "success": true,
  "images": [
    {
      "_id": "image_id",
      "imageUrl": "url_to_image",
      "prompt": "Image prompt",
      "style": "Style",
      "user": "user_id",
      "createdAt": "2026-06-08T10:30:00Z"
    }
  ]
}
```

**Get Community Images**
```json
GET /api/image/community

Response:
{
  "success": true,
  "images": [
    {
      "_id": "image_id",
      "imageUrl": "url_to_image",
      "prompt": "Image prompt",
      "style": "Style",
      "user": "user_id",
      "createdAt": "2026-06-08T10:30:00Z"
    },
    ...
  ]
}
```

---

## 🎯 Key Features Implemented

### ✅ Core Authentication
- User registration with email validation
- JWT-based login with secure tokens
- Password hashing with bcryptjs
- Token-based session management
- Protected routes with auth middleware

### ✅ Image Generation
- AI image generation using Hugging Face API (Stable Diffusion 3 Medium)
- Supports both authenticated users and guests
- Guest users can generate 1 image before sign-up
- Authenticated users get unlimited generations
- Image prompts and metadata saved to database

### ✅ Image Management
- **Home Page:** Generate images with custom prompts
- **History Page:** View all user-generated images
  - Only accessible to logged-in users
  - Shows loading states and error handling
  - Display image prompts and generation dates
  - Download individual images
- **Explore/Community Gallery:** View all generated images from all users
  - Public community image browsing
  - Masonry grid layout
  - Real-time data from database

### ✅ User Experience
- Guest generation tracking with localStorage
- Login modal for unauthorized access attempts
- Responsive design for mobile and desktop
- Image download functionality
- Prompt history and style tracking
- Loading indicators for async operations
- Error handling and user feedback

### ✅ Backend API
- `/auth/register` - User registration
- `/auth/login` - User authentication
- `/auth/me` - Get current user profile
- `/image/upload` - Upload/save generated images
- `/image/me` - Get user's images (protected)
- `/image/community` - Get all community images

### 🔄 TODO / Optional Features
- [ ] Image upscaling with Real-ESRGAN
- [ ] Email verification
- [ ] Password reset feature
- [ ] Like/favorite functionality
- [ ] User dashboard with stats
- [ ] Admin panel
- [ ] Advanced image filtering and search
- [ ] Rate limiting per user
- [ ] Image sharing and social features
- [ ] Comments and ratings on images

---

## 📱 Application Pages & Usage

### Public Pages (No Login Required)
1. **Home Page** (`/`)
   - Generate AI images as a guest (1 free generation)
   - Choose from style presets (Cyberpunk, Realistic, Abstract, Anime, Fantasy, Sci-fi)
   - See generated images instantly
   - Download generated images

2. **Explore/Community** (`/explore`)
   - Browse all generated images from the community
   - View image prompts and generation dates
   - Masonry grid layout
   - No authentication required

3. **Login** (`/login`)
   - Sign in with email and password
   - Link to registration

4. **Register** (`/register`)
   - Create new account with name, email, password
   - Link to login

5. **Privacy Policy** (`/privacy-policy`)
   - Legal information about data usage

6. **Terms & Conditions** (`/terms-and-conditions`)
   - Platform usage terms

### Protected Pages (Login Required)
1. **History** (`/history`)
   - View all your generated images
   - See image prompts and creation dates
   - Download individual images
   - Shows login modal if not authenticated

2. **Dashboard** (`/dashboard`)
   - User profile and settings
   - Statistics and usage info

### Workflow

**For Guest Users:**
1. Visit Home page
2. Enter image prompt and select style
3. Generate image (1 free generation)
4. See login modal to continue
5. Browse community images

**For Registered Users:**
1. Register an account
2. Login with credentials
3. Generate unlimited images
4. View history of all generated images
5. Browse and explore community images
6. Download and share creations

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- Create an issue in the repository
- Check existing issues for solutions
- Provide detailed error messages and steps to reproduce

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Submit a Pull Request

### Contribution Guidelines
- Write clean, readable code
- Follow existing code style
- Test your changes before submitting
- Update README if adding new features
- Remove all console.logs before committing

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 Project Info

**Project Name:** DaVinci Studio  
**Type:** Full-Stack Web Application  
**Duration:** 8 Weeks (Internship Project)  
**Status:** Active Development  
**Role:** Full Stack Developer  
**Developer:** Sanath Rai  
**Email:** sanathrai03@gmail.com  
**GitHub:** https://github.com/SanathRai33  

### Tech Stack Summary
- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **AI APIs:** Hugging Face + Replicate
- **Authentication:** JWT
- **Deployment Ready:** ✅

### File Statistics
- **Backend:** 5 services, 3 controllers, 3 routes, 2 models, 1 middleware
- **Frontend:** 15+ components, 8 pages, 3 services, 2 hooks, 2 utilities
- **Total Lines of Code:** 3,000+

**Happy Creating with DaVinci Studio! 🎨✨**
