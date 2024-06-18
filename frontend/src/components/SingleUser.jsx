import React ,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
const SingleUser = () => {
    const[ userList ,setUserList]=useState([])
    const router=useNavigate()
    const userid=localStorage.getItem("userId")
    const { id } = useParams();
    async function getUser() {
        try {
         
          
            const response = await axios.post('http://localhost:5000/api/attendance/getAttendanceByUser',   { userId: id })
            console.log(response.data.userList, "response.data")
            if (response?.data?.success) {
              setUserList(response.data.userList)
                
            }
         
           
        } catch (error) {
            console.log(error)
        }
    }
  
  

    useEffect(() => {
        if (id) {
            getUser();
        }
    }, [id])

    function logout(){
        localStorage.setItem("userId","")
        localStorage.removeItem("userId")
        router('/')
      }
   
  return (
    <div>
         
    <div  className="pt-4 mt-4">
       <br/>
       <h2>Attendance Record</h2><br/>
       <br/>
       {userList?.length? <div className='row row-cols-1 row-cols-md-3 g-4' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>

      
            {userList.map((user)=>(
            
                 <div className='card'  style={{cursor:'pointer' ,width:"25%"}}>
               
                <div className='card-body'>
               
               <h6>Date : {user.sign_in_date}</h6>
               <h6>Sign In Time :{user.sign_in_time}</h6>
               <h6>Sign Out Time : {user.sign_out_time}</h6>
               <h6>Status : {user.sign_in_status}</h6>
             
               </div>
              
              </div>
   

           ))} 
         
         
           </div>:
           <div>Loading...</div>
            }
            </div>
            <div className="mt-5">
           {userid ?
             (<input type="button" value="Logout" onClick={logout}  className='btn btn-success rounded'/>):(<p></p>)
           }
         </div>

         <div className="mt-5">
              
                <input type="button" value="Logout" onClick={logout}  className='btn btn-success rounded'/>
           
            </div>
           
        
       
   </div>
  )
}

export default SingleUser
