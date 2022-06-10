import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import {  selectUser } from './features/LoginSlice';
import Password from './Password';


function Login() {
 

  let [password, setPassword]=useState('')
  let [username, setUsername]=useState('')
  let [pasto, setPasswordType]=useState('password')
  let [clas, setclas]=useState('password_viewl')
  let logincredentials=useSelector(selectUser)



  let pattrennum=/[0-9]{1}/
  let patrenUper=/[A-Z]{1}/
  let paternAlpa=/[a-z A-Z]{1}/
  let patrenSpecial=/[^ a-zA-Z0-9\-\/]/



  let minletter=false;
  let testnum=false;
  let testUpper=false;
  let testAlpa=false;
  let testSpecial=false;





  let valid_password=false;
    // To Chek which one is missing 
  if(password.length>=8  ){
    minletter=true;
  }

  if (pattrennum.test(password)){
    testnum=true;
  } 
  if (patrenUper.test(password)){
    testUpper=true;
  }
  if (paternAlpa.test(password)){
    testAlpa=true;
  }

  if (patrenSpecial.test(password)){
    testSpecial=true;
  }




  if (password.length>=8 &&pattrennum.test(password) && patrenUper.test(password)
  &&paternAlpa.test(password) && patrenSpecial.test(password)  )
  {
    valid_password=true;
  }
  



   let handleclick=(e)=>{
      e.preventDefault()

      
      if(logincredentials.userName!==username){
        // console.log('Same name!')
        alert('Invalid username!')
      }
   
      if(logincredentials.password!==password){
        alert("Invalid Password!")
      }
      
      else {
        alert('Logged successfully!')
        setPassword('')
        setUsername('' )

      }

   }

   let onPasswordTogel=(e)=>{
    e.preventDefault()
      
      if (pasto==='password'){
        setPasswordType('type')
        setclas('password_notviewl')
      }
      else {
        setPasswordType('password')
        setclas('password_viewl')

      }
      

   }


  return (
    <div className="App">
      <div className='Login'>
        <form className='form'>
        <input   className='username' value={username}  type='text' placeholder='Username' required  onChange={e=>setUsername(e.target.value)}/>  <br/>
        <input  className='password' value={password} type={pasto} placeholder='password' onChange={e=>setPassword(e.target.value)} required/><button onClick={onPasswordTogel} className= {clas}>view</button>
         <br/>
         
         <Password minletter={minletter} testUpper={testUpper} testAlpa={testAlpa} testSpecial={testSpecial} testnum={testnum}/>
          
          
          <div className='checkbox'>
            <input  type='checkbox'  /> <b>Keep me logged in</b> 
            </div>
              <br/>  {
                valid_password?  <button className='submit_btn' type='submit'  onClick={handleclick}>Login</button>:<small>Login button will be enabled when password is valid</small>
               
              }



       
        </form>

      </div>
    </div>
  );
}

export default Login;

