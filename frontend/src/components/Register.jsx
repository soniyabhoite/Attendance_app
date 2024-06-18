import React from 'react'
import '../css/Register.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const router=useNavigate()

    const [userdata,setUserdata]=useState({username:'',email:'',password:'',phone_no:''})
    function handleChange(e){

         setUserdata({...userdata,[e.target.name]:e.target.value})

    }
    async function handleSubmit(e){
        e.preventDefault()
        if(userdata.username && userdata.email && userdata.password)
            {
                console.log("submit method")
                 try {
                    
                     const response=await axios.post("http://localhost:5000/api/auth/register",{userdata})
                     if(response.data.success)
                        {
                            alert(response.data.message)
                            setUserdata({username:"",password:"",email:"",phone_no:""})
                            router('/login')
                        }
                        else{
                            alert(response.data)
                        }
                 } catch (error) {
                    alert(error)
                    
                 }

            }
            else{
                alert("all fields are required")
            }


    }


  return (
    <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='register'>
        <p className='h1 mt-5 pt-4 text-primary'>Register </p>
        <form action='' onSubmit={handleSubmit}>
        <div className='mt-5'>
           <label htmlFor="" className='h6'>Username :</label>
           <input type='text' name='username' required onChange={handleChange} value={userdata.username} className='ms-3 rounded'></input>
           
           </div>
           <div className='mt-3'>

           <label htmlFor="" className='h6 '>Email </label>
           <span className="ps-4">:</span>
           <input type='email' required onChange={handleChange} name='email' value={userdata.email} className='ms-3 rounded'></input>
        </div>
        <div className='mt-3'>

        <label htmlFor="" className='h6'>Password :</label>
      
        <input type='password' required onChange={handleChange} name='password' value={userdata.password} className='ms-3 rounded'></input>
        </div>
        <div className='mt-3'>

        <label htmlFor="" required onChange={handleChange} className='h6'>Phone_No :</label>
       
        <input type='number' name='phone_no' onChange={handleChange} value={userdata.phone_no} className='ms-3 rounded'></input>
        </div>
        <div className="mt-4">
            <input type="submit" value="Register" className='btn btn-success ' />
        </div>
        </form>
      
    </div>
  )
}

export default Register
