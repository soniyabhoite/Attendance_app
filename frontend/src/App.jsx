import logo from './logo.svg';
import './App.css';
import {Routes ,Route, useNavigate} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Attendance from './components/Attendance';
import Show_User_Attendance from './components/Show_User_Attendance';
import Admin_Page from './components/Admin_Page';


function App() {
  const router=useNavigate()
  return (
    <div className="App">
      <Navbar/>

     
      <Routes>

        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/get-attendance' element={<Show_User_Attendance/>}/>
        <Route path='/admin' element={<Admin_Page/>}/>
        {/* <Route path='/single-product/:id' element={<SingleProduct/>} /> */}
      </Routes>
     
      
    </div>
  );
}

export default App;
