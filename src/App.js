import React from 'react'
import Login from './Login'
import './App.css';


import {  selectUser } from './features/LoginSlice';
import Register from './Register';
import { useSelector } from 'react-redux';

function App() {

  let logincredentials=useSelector(selectUser)

  return (
    <div className='app'>

      <div className='header'>
        <b className=    {logincredentials? 'header_reg':''}  >Register</b> <b className= {logincredentials? '':'header_log'}   >Login</b>
      </div>

     
      {/* <Register/> */}
      {logincredentials ? <Login/>: <Register/>}


    </div>
  )
}

export default App

