import React from 'react'
import { useNavigate } from 'react-router-dom'

const Attendance = () => {
    const router=useNavigate()
  return (
    <div>
        <div className='mx-auto bg-light  shadow-lg pb-3 mb-5 bg-body rounded' id='register'> 
         <p className='h1 mt-5 pt-4 text-primary'>Attendance Page</p>
         <div className="mt-5 ">
            <p>15-06-2024</p>
           
            <p>15.14.00 PM</p>
         </div>
         <div className="mt-5 ">
           <form action="">
            <div>
                <input type="submit" value="Sign-In"  className='btn btn-info rounded'/>
            </div>
            <div className="mt-5">
                <input type="button" value="View Report" onClick={()=>router('/get-attendance')}  className='btn btn-success rounded'/>
            </div>

           </form>
           
           
         </div>
         </div>
      
    </div>
  )
}

export default Attendance
