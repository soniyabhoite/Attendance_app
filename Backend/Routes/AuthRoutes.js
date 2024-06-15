import { Router } from "express";
import { login, register,getUser } from "../controllers/Auth.Controller.js";

const router=Router()
router.post("/register",register)
router.post("/login",login)
router.get("/getUser",getUser)

export default router