const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const Post = require("./models/post");

routes.get("/posts", async (req, res) => {
  const posts = await Post.find();
  return res.json(posts);
});

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, key, size, location: url = "" } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url
  });

  return res.json(post);
});

routes.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  await post.remove();

  return res.send();
});

module.exports = routes;
