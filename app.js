const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let posts = [];

app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/create", (req, res) => {
    const { title, content } = req.body;

    const newPost = {
        id: Date.now(),
        title,
        content
    };

    posts.push(newPost);

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const postId = Number(req.params.id);

    posts = posts.filter(post => post.id !== postId);

    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const postId = Number(req.params.id);

    const post = posts.find(p => p.id === postId);

    res.render("edit", { post });
});

app.post("/edit/:id", (req, res) => {
    const postId = Number(req.params.id);
    const { title, content } = req.body;

    const post = posts.find(p => p.id === postId);

    post.title = title;
    post.content = content;

    res.redirect("/");
});

app.get("/post/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("post", { post });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
