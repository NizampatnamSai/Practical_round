import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'
import { login } from './features/LoginSlice';
import Password from './Password';


function Register() {
 

  let [password, setPassword]=useState('')
  let [conformpassword, setOnformPassword]=useState('')
  let [username, setUsername]=useState('')
  let [pasto, setPasswordType]=useState('password')
  let [clas, setclas]=useState('password_view')
  const dispatch=useDispatch();



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

      
    if(password!==conformpassword){
      alert("Conform password doesn't match")
    }
      else {
        setPassword('')
      setUsername('' )

      dispatch(login({
        userName:username,
        password:password
      }))
      }





      console.log(`Your password is ${password}`)
      console.log(`minimum length   ${minletter}`)
      console.log(`number ${testnum}`)
      console.log(`Uppercase ${testUpper}`)
      console.log(`Alphabetic ${testAlpa}`)
      console.log(`Special character ${testSpecial}`)

      console.log(`Is password Valid ? ${ valid_password? 'Yes': 'No'} `)

   }

  //  let pastogle=true;
   let togle;

   let onPasswordTogel=(e)=>{
    e.preventDefault()
      
      if (pasto==='password'){
        setPasswordType('type')
        setclas('password_notview')
        togle=true;
      }
      else {
        setPasswordType('password')
        setclas('password_view')

        togle=false;
      }
      // pastogle=togle;
      console.log(togle)

   }


  return (
    <div className="App">
      <div className='Login'>
        <form className='form'>
        <input   className='username' value={username}  type='text' placeholder='Username' required  onChange={e=>setUsername(e.target.value)}/>  <br/>
        <input  className='password' value={password} type={pasto} placeholder='password' onChange={e=>setPassword(e.target.value)} required/><button onClick={onPasswordTogel} className= {clas}>view</button>
        <input  className='conform password' value={conformpassword} type='Password' placeholder='Confrom password' onChange={e=>setOnformPassword(e.target.value)} required/> 
         <br/>
         
           
         <Password minletter={minletter} testUpper={testUpper} testAlpa={testAlpa} testSpecial={testSpecial} testnum={testnum}/>
         
              <br/>  {
                valid_password?  <button className='submit_btn' type='submit'  onClick={handleclick}>Register</button>:<small>Register button will be enabled when password is valid</small>
               
              }


       
        </form>

      </div>
    </div>
  );
}

export default Register;

