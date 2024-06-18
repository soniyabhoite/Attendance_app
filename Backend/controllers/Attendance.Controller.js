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
            console.log(att)
            await att.save()
            return res.status(200).json({message:"Attendance marked successfully",success:true,userdata:att})
    } catch (error) {
        return res.status(500).json(error)
        
    }
}


export const getAttendance=async (req,res)=>{
    try {

        const allRecords=await AttendanceSchema.find({})
        if(!allRecords)
            {
                return res.send("records not exists")
            }
        return res.status(200).json({message:"record fetched",success:true,records:allRecords})
        
    } catch (error) {
        return res.status(500).json(error)
    }

}


export const getAttendanceByUser = async (req, res) => {
    try {
        console.log("hiii")
      const { userId } = req.body;
      console.log(userId,"userId")
    //   const userList = await AttendanceSchema.find({ user: userId }).populate(
    //     "User"
    //   );
    const userList=await AttendanceSchema.find({user:userId})
      return   res.json({ success: true, userList });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, error });
    }
  };


  export const editAttendance=async(req,res)=>{
    const { attendanceData,attendanceId, } = req.body;
    console.log(attendanceId, attendanceData);
    try
    {
  
      const attendance = await AttendanceSchema.findByIdAndUpdate(
       {_id:attendanceId},
       {
        $set:{
              
              sign_out_time:attendanceData.sign_out_time,
              is_logged:attendanceData.is_logged
             
        }
      },{
        new:true,
        useFindAndModify:false
      });
      console.log(attendance)
      if (!attendance) {
        return res.json({ success: false, message: "record not found" });
      }
      console.log(attendance, "attendance");
      return res.json({
        success: true,
        message: "sign out successfully .",
      });
       
    }
      catch(error) {
          res.status(400).json({
            error: error
          });
        }
    };