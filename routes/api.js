import express from 'express';
const router =  express.Router();
import * as blogController from "../app/controller/blogController.js";

//Create Blog
router.post('/create-blog',blogController.createBlog)

//Read Blog
router.get('/read-blog',blogController.readBlog)

//Update Blog
router.put('/update-blog',blogController.updateBlog)

//Delete Blog
router.delete('/delete-blog',blogController.deleteBlog)


export default router;