import React, { useState } from 'react'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedInCase } from '../state/userAuthSlice';
import '../App.css'

function LoginPage() {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    
    const handleEmail=(e)=>setEmail(e.target.value);
    const handlePassword=(e)=>setPassword(e.target.value);

    const handleLoginbtn=(e)=>{
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem('users')??'[]');
        
        if(users.length>0){
            const activeUser=users.filter((item)=>item.email===email);
            
            if (activeUser.length>0) {
                if(activeUser[0].password==password){
                    const obj={
                        ...activeUser[0],
                        token:Math.floor(Math.random()*10**12)
                    }
                    localStorage.setItem('activeUser',JSON.stringify(obj));
                    setError(false);
                    setSuccess(true);
                    setEmail('');
                    setPassword('');
                    setTimeout(()=>{
                        dispatch(isLoggedInCase(obj));
                        navigate('/profile');
                    },1500);
                  
                }else{
                    setError(true);
                    setSuccess(false);
                }
            }else{
                setError(true);
                setSuccess(false);
            }
        }else{
            setError(true);
            setSuccess(false);
        }
    }
  return (
    <div className='login-page'>
        <Header/>
        <div className='login'>
    <p className='title'>Login</p>
    <form>
    <label className='label' htmlFor='email'>Email</label><br/>
        <input onChange={handleEmail} value={email} className='input' id='email' type='email' required /><br/>

        <label className='label' htmlFor='password'>Password</label><br/>
        <input onChange={handlePassword} value={password} className='input' id='password' type='password' required /><br/>

       {error && <p className='error'>Invalid UserCredentials</p>}
       {success && <p className='success'>Login Successul!</p> } 
        <button onClick={handleLoginbtn}>Login</button>
    </form></div>
    </div>
  )
}

export default LoginPage