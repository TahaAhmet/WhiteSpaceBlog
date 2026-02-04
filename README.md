# 📝 White Space 
White Space — Writing & Notes is a minimalist blog application built for writing, editing, and managing personal posts in a clean and distraction-free environment.
The project focuses on simplicity, readability, and core CRUD functionality without unnecessary complexity.
It’s designed as a learning-focused project that demonstrates server-side rendering, routing, and basic content management using Express and EJS.

---

## 📸 Preview

The application includes:
- ✍️ Create new posts with title and content
- 📝 Edit existing posts
- 🗑️ Delete posts with a dedicated action
- 📄 Read individual posts on a single post page
- 🎨 Clean, minimal UI inspired by modern writing platforms
- ⚡ Fast server-side rendering with EJS

---

## 🚀 Technologies Used
- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript Templates)
- **HTML5**
- **CSS3**
- **Body-Parser**

---

## 📂 Project Structure

```
WhiteSpaceBlog/

│── app.js                 # Express server & routes
│
│── node_modules/
│
├── views/
│   ├── index.ejs             # Home page (post list)
│   ├── new.ejs               # Create post page
│   ├── edit.ejs              # Edit post page
│   └── post.ejs              # Single post page
│
├── public/
│   └── style.css             # Global styles
│
│── package-lock.json
└── package.json
```

---

## ⚡ Features

- 📝 Full CRUD Functionality: Create, read, update, and delete blog posts.
- 🧠 Server-Side Rendering: All pages are rendered using EJS templates.
- 🎨 Minimal UI: Clean typography, simple layout, and focused writing experience.
- 🗂️ Structured Views: Separate pages for listing posts, writing, editing, and reading.
- ⚡ Lightweight & Beginner-Friendly: No database required — ideal for learning Express fundamentals.

---

## 🎯 Project Purpose
This project was built to:
- Practice Express routing and middleware
- Understand EJS templating and server-side rendering
- Implement basic CRUD operations
- Create a clean, readable UI without frameworks

---

## 🛠️ How to Run

1. Clone the repository:

    git clone https://github.com/TahaAhmet/WhiteSpaceBlog.git

2. Navigate into the project directory:

    cd WhiteSpace

3. Install dependencies:

    npm install

4. Start the server:

    node index.js

5. Open your browser and visit:

    http://localhost:3000

Start writing in your own White Space ✨
