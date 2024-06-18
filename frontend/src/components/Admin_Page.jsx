import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Admin_Page = () => {
    const[ userList ,setuserList]=useState([])
    
    useEffect(() => {
       async function getUser(){
    try {
             const response=await axios.get("http://localhost:5000/api/auth/getUser")
             if(response.data.success)
            {
                setuserList(response.data.user)
                console.log(userList)
            }
    
        } catch (error) {
            alert(error)
    
        }
         


       }
       getUser()
    });
  
  return (
    <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='login'>
         <div className=" d-flex col float-end  my-4  " >
             
          
             <div className="d-flex">
               
               
                <p className="top-t mx-3"></p>
             </div>
            
           
         
          </div>
             <br/>
             <h2 className='mt-4'>User </h2><br/>
             <br/>
             {userList?.length? <div className='row row-cols-1 row-cols-md-3 g-4' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
 
            
                  {userList.map((user)=>(
                    
                       <div className='card'   style={{cursor:'pointer' ,width:"25%"}}>
                   
                      <div className='card-body'>
                      <h4 className='card-title'>{user.username}</h4>
                    
                     </div> 
                     <div class="card-footer">
                     {/* <button class="btn btn-primary pr-6" onClick={() => router(`/single-user/${user._id}`)}>View Attendance</button> */}
                    
                     </div>
                    </div>
         
 
                 ))} 
               
                 </div>:
                 <div>Loading...</div>
                  }
                 

    </div>
  )
}

export default Admin_Page
