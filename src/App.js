import {useEffect,React} from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Signup from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'
import LoginPage from './Pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInCase } from './state/userAuthSlice'


function App() {
  const isLoggedIn=useSelector((state)=>state.userAuth.isLoggedIn);
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.userAuth.user);
  
  /////////////////////////////////////
  useEffect(()=>{
    const checkValue=JSON.parse(localStorage.getItem('activeUser')??null);
if (checkValue){
  dispatch(isLoggedInCase(checkValue));
  console.log(isLoggedIn,user);
}
},[]);
console.log(isLoggedIn,user,'in opne');

//////////////////////////////////////////
  return (
    <div>
      <Router basename="/Signup-Profile-Problem-react-project">
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App