import { Router } from "express";
import {saveAttendance,getAttendance} from '../controllers/Attendance.Controller.js'
const router =Router()
router.post('/saveAttendance',saveAttendance)
router.get('/getAttendance',getAttendance)
export default router