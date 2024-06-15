import React, {  useState } from 'react'
import '../css/Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

     const [loginData, setLoginData] = useState({ email: "", password: "" });

    

  
   
     const router = useNavigate();
    function handleChange(e) {
       
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if(loginData.email=='admin@gmail.com' && loginData.password=='admin')
            {
                router('/admin')
            }
        if (loginData.email && loginData.password) {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/login', { loginData })
              
                if (response.data.success) {
                    alert(response.data.message);
                    localStorage.setItem("userId",response.data.userData._id)
                     
                    setLoginData({ email: "", password: "" })
                    router('/attendance')
                
                }
            } catch (error) {
                console.log(error)
              alert(error.response.data.message)
            }
        } else {
            alert("All fields are mandatory.")
        }
    }

  

  return (
    <div>
       
        <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='login'>
        <p className='h1 mt-5 pt-3 text-primary'>Login </p>
        <form action='' onSubmit={handleSubmit}>
      
           <div className='mt-5'>

           <label htmlFor="" className='h6 '>Email </label>
           <span className="ps-4">:</span>
           <input type='email' required onChange={handleChange} name='email' value={loginData.email} className='ms-3 rounded'></input>
        </div>
        <div className='mt-3'>

        <label htmlFor="" className='h6'>Password :</label>
      
        <input type='password' required onChange={handleChange} name='password' value={loginData.password} className='ms-3 rounded'></input>
        </div>
       
        <div className="mt-4">
            <input type="submit" value="Login" className='btn btn-success ' />
        </div>
        </form>
      
    </div>
   
    </div>
  )
}

export default Login
