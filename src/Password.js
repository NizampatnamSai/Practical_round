import React from 'react'
import './App.css';


function Password({minletter,testUpper,testAlpa,testSpecial,testnum}) {
  return (
    <div >
              <b className='head'>Password must have following</b>
           <ul>
          
             <li className={minletter?  'valid' :'notvalid'}  >Must have 8 or more letters</li>
             <li className={testUpper? 'valid' : 'notvalid'} >One letter have upper case</li>
             <li className={testAlpa? 'valid': 'notvalid'}>One letter has to be alphabetical</li>
             <li className={testSpecial? 'valid':'notvalid' }>One letter has to be a Special character</li>
             <li className={testnum? 'valid':'notvalid'}>One letter has to be Numeric</li>
           </ul>
         </div>
  )
}

export default Password
