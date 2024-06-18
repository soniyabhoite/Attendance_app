import React ,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios'
const Attendance = () => {
 
    const router=useNavigate()
  
    const[signIn,setSignIn]=useState()
    var timer
  
    var [date,setDate] = useState(new Date());
    var formatteddate= moment(date).format('DD-MM-YYYY')
 
    const userid=localStorage.getItem("userId")
    const currentTime = new Date();
     const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    
    useEffect(() => {
         timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

  async function handleSubmit(e){
   
    e.preventDefault()
    if(date && timer)
        {
          var userdata={
            sign_in_date:formatteddate,
            sign_in_time:formattedTime,
            sign_in_status:"present",
            user_id:userid,
            is_logged:true
          }
          console.log(userdata)
             try {
                
                 const response=await axios.post("http://localhost:5000/api/attendance/saveAttendance",{userdata})
                 if(response.data.success)
                    {
                       console.log(response.data.userdata._id)
                      localStorage.setItem("attendanceId",response.data.userdata._id)
                    
                        alert(response.data.message)
                        setSignIn(true)
                     
                      
                    }
             } catch (error) {
                alert(error)
                
             }

        }
        else{
            alert("all fields are required")
        }


}

function logout(){
  localStorage.setItem("userId","")
  localStorage.removeItem("userId")
  router('/')
}

async function signOut(){
   try {

    
     
    const attendanceId=localStorage.getItem("attendanceId")
    console.log(attendanceId)
    const attendanceData={
      sign_in_date:formatteddate,
      sign_out_time:formattedTime,
      is_logged:false
    }
    const response=await axios.post("http://localhost:5000/api/attendance/editAttendance",{attendanceData,attendanceId})
      console.log(response)
      if(response.data.success)
        {
          
          localStorage.setItem("attendanceId","")
          localStorage.removeItem("attendanceId")
          alert(response.data.message)
        }
   } catch (error) {
     alert(error)
    
   }


}


  return (
    <div>
        <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='register'> 
         <p className='h1 mt-5 pt-4 text-primary'>Attendance Page</p>
         <form action="" onSubmit={handleSubmit} >
         <div className="mt-5 ">
            <p>Date : {date.toLocaleDateString()}</p>
           
            <p>Time : {date.toLocaleTimeString()}</p>
         </div>
         <div className="mt-5">
          
            <div>
            {/* <input type="submit" value="Sign In" className='rounded btn btn-info'/>
            <input type="button" onClick={signOut} value="Sign Out" className='btn-warning rounded btn btn-info ms-3'/> */}
              {!signIn ? (
                 <input type="submit" value="Sign In" className='rounded btn btn-info'/>
                ) :(
                  <input type="button" onClick={signOut} value="Sign Out" className='btn-warning rounded btn btn-info ms-3'/>
                )
              }
            </div>
            <div className="mt-5">
                <input type="button" value="View Report" onClick={()=>router('/get-attendance')}  className='btn btn-success rounded'/>
            </div>
            <div className="mt-5">
              {userid ?
                (<input type="button" value="Logout" onClick={logout}  className='btn btn-success rounded'/>):(<p></p>)
              }
            </div>

            </div>
           </form>
           
           
        
         </div>
      
    </div>
  )
}

export default Attendance
