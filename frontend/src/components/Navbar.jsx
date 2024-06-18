import React from 'react'
import {useNavigate } from 'react-router-dom'
const Navbar = () => {
    const router=useNavigate()
    const userid=localStorage.getItem("userId")
    function logout(){
      localStorage.setItem("userId","")
      localStorage.removeItem("userId")
      router('/')
    }
  return (
    <div>
      <div className='mt-5 d-flex p-3 justify-content-between text-center'>
        <a></a>
        <a></a>
        <a href='' onClick={()=>router('/register')}><h4 className='text-success'>Register</h4></a>
         {userid ? (
                 <a href='' onClick={logout}><h4 className='text-success'>Logout</h4></a>
                ) :(
                   <a href='' onClick={()=>router('/login')}><h4 className='text-success'>Login</h4></a>
                )
              }
    
      
       <a></a>
       <a></a>
</div>
    </div>
  )
}

export default Navbar
