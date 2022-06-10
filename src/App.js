import React from 'react'
import Login from './Login'


import { login, selectUser } from './features/LoginSlice';
import Register from './Register';
import { useSelector } from 'react-redux';

function App() {

  let logincredentials=useSelector(selectUser)

  return (
    <div>
      <Login/>
     {logincredentials? <Register/>:''}


    </div>
  )
}

export default App

