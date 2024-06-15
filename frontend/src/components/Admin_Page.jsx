import React from 'react'
import axios from 'axios'

const Admin_Page = () => {
    var userList=[]
       async function getUser(){
    try {
             const response=await axios.get("http://localhost:5000/api/auth/getUser")
             if(response.data.success)
            {
                userList=response.data.user
                console.log(userList)
            }
    
        } catch (error) {
            alert(error)
    
        }
         


       }
       getUser()
  
  return (
    <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='login'>
         <p className='h1 mt-5 pt-4 text-primary'>Admin Page </p>
         {userList.map((user)=>(
              <div>{user.username}</div>
             
              
     
          ))}

    </div>
  )
}

export default Admin_Page
