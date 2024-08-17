import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedOutCase } from '../state/userAuthSlice';
import '../App.css'

function ProfilePage() {
    const isLoggedIn=useSelector((state)=>state.userAuth.isLoggedIn);
    const user=useSelector((state)=>state.userAuth.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
  const handleLogout=()=>{
    localStorage.removeItem('activeUser');
    dispatch(isLoggedOutCase());
    navigate('/');
}  
///////////////////////////////
useEffect(()=>{
    if (!isLoggedIn) {
        navigate('/');
    }
});
/////////////////////////////
  return (
    <div className='profile-page'>
        <Header/>
        
        {isLoggedIn && <div className='profile'>
            <p className='title'>Profile</p>
            <div className='details'>
             <p>Full Name : {user.name}</p>
             <p>Email : {user.email}</p>
             <p>Password : {user.password}</p>
      
        <button onClick={handleLogout}>Logout</button>
        </div>
    </div>}
    </div>
  )
}

export default ProfilePage