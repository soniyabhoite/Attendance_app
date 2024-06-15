import React from 'react'
import axios from 'axios'

const Show_User_Attendance = () => {
    
    var user_records=[];
    async function getData(){
    try {
        const response=await axios.get("http://localhost:5000/api/attendance/getAttendance")
        if(response.data.success)
            {
               user_records=response.data.records
               console.log(user_records)
            }
      } catch (error) {
        alert(error)
        
      }
    }
    getData()
  return (
    <div>
      
          {user_records.map((r)=>(
           
             <p>{r.sign_in_date}</p>
              
     
          ))}
        

    
    </div>
  )
}

export default Show_User_Attendance
