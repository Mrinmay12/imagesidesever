import express from "express";
import {RejectPost,ApprovedPost,Link ,LinkCount,Creatuser,Login} from "../Controllers/AdminController.js";
const router=express.Router()
router.delete('/post/:post_id',RejectPost)
router.put('/post/approved/:post_id',ApprovedPost)
router.post('/post/like/:post_id',Link)
router.get('/post/likecount/:post_id',LinkCount)
router.post('/admin/register',Creatuser)
router.post('/admin/login',Login)

export default router