import express from 'express';
import { verifyToken} from "../middleware/verifyToken.js"
const router = express.Router();
import { getPost, getPosts, addPost, updatePost, deletePost } from '../controllers/post.controller.js';


router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;