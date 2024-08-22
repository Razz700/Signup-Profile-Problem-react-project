import {useEffect,React} from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Signup from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'
import LoginPage from './Pages/LoginPage'
import { useDispatch } from 'react-redux'
import { isLoggedInCase } from './state/userAuthSlice'


function App() {
  const dispatch=useDispatch();

  /////////////////////////////////////
  useEffect(()=>{
    const checkValue=JSON.parse(localStorage.getItem('activeUser')??null);
if (checkValue){
  dispatch(isLoggedInCase(checkValue));
}
},[]);


//////////////////////////////////////////
  return (
    <div>
      <Router>
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