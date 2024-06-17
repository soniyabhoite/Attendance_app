import AttendanceSchema from "../modal/Attendance.Schema.js"

export const saveAttendance=async (req,res)=>{
    try {
        const {sign_in_date,sign_in_time,user_id,is_logged,sign_in_status}=req.body.userdata
         if(!sign_in_date|| !sign_in_time || !user_id || !is_logged)
            {
                return res.send("all fields are required")
            }
            const att=new AttendanceSchema({
                sign_in_date:sign_in_date,
                sign_in_time:sign_in_time,
                is_logged:is_logged,
                sign_in_status:sign_in_status,
                user:user_id


            })
            await att.save()
            return res.status(200).json({message:"Attendance marked successfully",success:true,userdata:att})
    } catch (error) {
        return res.status(500).json(error)
        
    }
}


export const getAttendance=async (req,res)=>{
    try {

        var allRecords=await AttendanceSchema.find()
        if(!allRecords)
            {
                return res.send("records not exists")
            }
        return res.status(200).json({message:"record fetched",success:true,records:allRecords})
        
    } catch (error) {
        return res.status(500).json(error)
    }

}