import { Router } from "express";
import {saveAttendance,getAttendance,getAttendanceByUser,editAttendance} from '../controllers/Attendance.Controller.js'
const router =Router()
router.post('/saveAttendance',saveAttendance)
router.get('/getAttendance',getAttendance)
router.post('/getAttendanceByUser',getAttendanceByUser)
router.post('/editAttendance',editAttendance)
export default router