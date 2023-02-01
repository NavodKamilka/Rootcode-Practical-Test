const router = require("express").Router();

const {
  createPost,
  // getPostById,
  // getPost
} = require("./post.controller");
// router.get("/", getPost);
router.post("/",  createPost);
// router.get("/:id",  getPostById);

module.exports = router;
