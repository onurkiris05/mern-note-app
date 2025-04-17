# 📝 Notes App

A modern, full-stack **MERN** (MongoDB, Express.js, React, Node.js) application for creating, editing, and deleting notes. This app features a sleek, responsive user interface styled with **Bootstrap** and enhanced with **Framer Motion** for delightful animations. The backend is powered by **Express** and **MongoDB**, with **TypeScript** ensuring robust, type-safe code. 🚀

---

## 📑 Table of Contents

- ✨ Features
- 🛠️ Tech Stack
- ⚙️ Installation
- 📚 Usage
- 🗂️ Project Structure
- 📜 Scripts
- 🤝 Contributing
- 📄 License

---

## ✨ Features

- **Create Notes** 📝: Add new notes with a title and content.
- **Edit Notes** ✏️: Update existing notes effortlessly.
- **Delete Notes** 🗑️: Remove notes with a single click.
- **Responsive Design** 📱💻: Seamless experience on desktop, tablet, and mobile.
- **Smooth Animations** 🎥: Powered by Framer Motion for a polished UI.
- **Secure Backend** 🔒: Uses bcrypt for password hashing and express-session for secure sessions.
- **Type Safety** ✅: TypeScript ensures reliable code across the stack.

---

## 🛠️ Tech Stack

### 🌐 Frontend

- **React** ⚛️: For building dynamic user interfaces.
- **React Router** 🛤️: For client-side navigation.
- **React Bootstrap** 🎨: For responsive, pre-styled components.
- **Framer Motion** 🎬: For fluid animations.
- **React Hook Form** 📋: For efficient form handling.
- **Zustand** 🗃️: For lightweight state management.
- **TypeScript** 🧩: For type-safe JavaScript.

### ⚙️ Backend

- **Node.js & Express** 🖥️: For a robust server-side API.
- **MongoDB & Mongoose** 🗄️: For data storage and management.
- **TypeScript** 🧩: For type-safe backend code.
- **Bcrypt** 🔐: For secure password hashing.
- **Express Session & Connect-Mongo** 🔗: For session management.
- **Morgan** 📜: For HTTP request logging.
- **Envalid** 🌍: For environment variable validation.

### 🧰 Dev Tools

- **ESLint** ✅: For maintaining code quality.
- **Nodemon** 🔄: For auto-restarting the server during development.
- **React Scripts** 🛠️: For streamlined frontend development.

---

## ⚙️ Installation

### 📋 Prerequisites

- **Node.js** (v16 or higher) 🟢
- **MongoDB** (local or MongoDB Atlas) 🗄️
- **npm** (included with Node.js) 📦

### 🛠️ Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app
   ```

2. **Set up the backend**:

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   PORT=5000
   ```

3. **Set up the frontend**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Seed the database (optional)** 🌱: From the `backend` directory:

   ```bash
   npm run seed
   ```

5. **Start the backend** 🚀: From the `backend` directory:

   ```bash
   npm start
   ```

6. **Start the frontend** 🌟: From the `frontend` directory:

   ```bash
   npm start
   ```

   The app will be available at:

   - Frontend: `http://localhost:3000` 🌐
   - Backend: `http://localhost:5000` ⚙️

---

## 📚 Usage

- Open `http://localhost:3000` in your browser 🌐.
- Click **"Add Note"** to create a new note 📝.
- Select a note to **edit** its title or content ✏️.
- Click the **delete icon** to remove a note 🗑️.
- Enjoy a responsive, animated experience across devices! 🎉

---

## 🗂️ Project Structure

```
notes-app/
├── backend/ 🖥️
│   ├── src/
│   │   ├── server.ts ⚙️
│   │   ├── routes/ 🛤️
│   │   ├── models/ 🗄️
│   │   ├── controllers/ 🎮
│   │   └── middleware/ 🔒
│   ├── seedDB/ 🌱
│   ├── .env 🔧
│   └── package.json 📦
├── frontend/ 🌐
│   ├── src/
│   │   ├── components/ 🧩
│   │   ├── pages/ 📄
│   │   ├── App.tsx ⚛️
│   │   └── index.tsx 🚀
│   └── package.json 📦
└── README.md 📜
```

---

## 📜 Scripts

### Backend ⚙️

- `npm start` 🚀: Launch the backend with nodemon.
- `npm run lint` ✅: Check code quality with ESLint.
- `npm run seed` 🌱: Populate the database with sample data.
- `npm test` 🧪: Placeholder for tests (not implemented).

### Frontend 🌐

- `npm start` 🌟: Run the React development server.
- `npm build` 🏗️: Build the app for production.
- `npm test` 🧪: Execute tests with Jest.
- `npm eject` ⚠️: Eject from Create React App (use with caution).

---

## 🤝 Contributing

We welcome contributions! 🎉 To get started:

1. Fork the repository 🍴.
2. Create a new branch (`git checkout -b feature/your-feature`) 🌿.
3. Make your changes and commit (`git commit -m "Add your feature"`) ✍️.
4. Push to the branch (`git push origin feature/your-feature`) 🚀.
5. Open a Pull Request 📬.

Please ensure your code adheres to **ESLint** rules and includes tests where applicable. ✅

---

## 📄 License

This project is licensed under the **ISC License**. See the `backend/package.json` for details. 📜

---

**Happy note-taking!** 📝✨
