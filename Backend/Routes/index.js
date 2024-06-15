import { Router } from "express";
import AuthRoutes from './AuthRoutes.js'
import AttendanceRoutes from './AttendanceRoutes.js'
const router=Router()
router.use('/auth',AuthRoutes)
router.use('/attendance',AttendanceRoutes)

export default router 
