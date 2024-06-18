import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin_Page = () => {
    const[ userList ,setuserList]=useState([])

     const router=useNavigate();
    useEffect(() => {
       async function getUser(){
    try {
             const response=await axios.get("http://localhost:5000/api/auth/getUser")
             if(response.data.success)
            {
                all(response.data.user)
                console.log(userList)
            }
            else{
               alert(response.data)
            }
    
        } catch (error) {
            alert(error)
    
        }
         


       }
       getUser()
    });

     async function Routing(id){
     router(`/single-user/${id}`); //template parsing ${}
    }
    function all(u)
    {
      setuserList(u)
    }
    var userid=localStorage.getItem("userId")
    function logout(){
      localStorage.setItem("userId","")
      localStorage.removeItem("userId")
      router('/')
    }

    async function singleUser(id)
    { 
      console.log(id)

      router(`/single-user/${id}`);
       
    }
    
  return (
    <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 mt-5 bg-body rounded' id='user'>
         
             <br/>
             <h2 className='mt-4'>All Users </h2><br/>
             <br/>
             {userList?.length? <div className='col' >
 
            
                  {userList.map((user)=>(
                    
                       <div className='card mt-2'   style={{cursor:'pointer' ,width:"40%"}}>
                     
                      <div className='card-body' onClick={()=>singleUser(user?._id)}>
                      <h4 className='card-title'>{user.username}</h4>
                     
                    
                     </div> 
                    
                    </div>
         
 
                 ))} 
               
               <div className="mt-5">
              
                <input type="button" value="Logout" onClick={logout}  className='btn btn-success rounded'/>
           
            </div>
                 </div>:
                 <div>Loading...</div>
                  }
                 

    </div>
  )
}

export default Admin_Page
