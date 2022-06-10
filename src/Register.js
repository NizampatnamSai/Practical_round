import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/LoginSlice'
import './App.css';

function Register({usernames,passwords}) {
   

    let logincredentials=useSelector(selectUser)

    console.log(logincredentials)

    if(logincredentials.userName===usernames){
        console.log('user name matched!!')
    }


  return (
    <div className='register'>
        <button>Register</button>
      
    </div>
  )
}

export default Register
