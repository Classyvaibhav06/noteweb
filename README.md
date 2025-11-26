# 🗒️ Simple File-Based Notes App

A lightweight note-taking application built with Node.js, Express, EJS, and the File System module. Designed for backend beginners, this app lets you easily create, view, and delete text notes—each stored as a `.txt` file on the server. No databases, just handy file storage.

---

## 🚀 Features

- **📝 Create Notes** — Save notes as `.txt` files
- **📂 View Notes** — Read file contents via dynamic EJS templates
- **❌ Delete Notes** — Remove notes directly from storage
- **🎨 Clean UI** — Minimal, modern interface with Tailwind CSS
- **📁 File-Based Storage** — Pure Node.js file system operations

---

## 📁 Project Structure

```
backend/
│  index.js           # Main server file
│  package.json
│  noteweb
├── public/           # Static assets (CSS, images)
├── views/            # EJS templates (index, show, etc.)
└── files/            # Stores the note .txt files
```

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Tailwind CSS** (via CDN)
- **File System (`fs` module)**

---

## 📦 Installation & Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Classyvaibhav06/backend.git
    cd backend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Start the Server**
    ```bash
    npm start
    ```

4. **Open in Browser**  
   Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Usage Guide

| Action       | Description                                   |
| ------------ | --------------------------------------------- |
| Create Note  | Enter title & content → saved as `.txt` file  |
| View Note    | Click note name → display note contents       |
| Delete Note  | Removes file from `/files/`                   |

---

## 🗂 Example File Storage

If you create a note titled:

```
Day 1 of Backend
```

It will be saved as:

```
Day1ofbackend.txt
```
*(Note: You can modify how titles are formatted in `index.js`.)*

---

## 🛠️ Future Improvements

- 📝 Edit/Update Notes
- 🔍 Search Notes
- 📅 Add Timestamps
- 👤 User Authentication
- ⚡ Pagination for many notes
- 🗄 Database integration (MongoDB / SQLite)

---

## 🤝 Contributing

Want to make this project better?  
- 📦 Fork the repository  
- 🌱 Create a new branch  
- 💾 Commit your changes  
- 🔁 Open a pull request

---

## 🧑‍💻 Author

**Vaibhav Ghoshi**  
Backend Developer • Student • Learning Node.js & Express

---

## 📄 License

This project is open for learning, modification, and improvement—no restrictions.

---
