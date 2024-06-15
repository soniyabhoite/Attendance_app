import AttendanceSchema from "../modal/Attendance.Schema.js"

export const saveAttendance=async (req,res)=>{
    try {
        const {sign_in_date,sign_in_time,sign_out_time}=req.body
         if(!sign_in_date|| !sign_in_time)
            {
                return res.send("all fields are required")
            }
            const att=new AttendanceSchema({
                sign_in_date:sign_in_date,
                sign_in_time:sign_in_time,
                sign_out_time:sign_out_time


            })
            await att.save()
            return res.status(200).json({message:"record stored successfully",success:true})
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