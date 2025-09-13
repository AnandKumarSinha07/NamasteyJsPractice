import React, { useState } from 'react'



function Password() {

  const [value,setValue]=useState('')  ;
  const [indicator,setIndicator]=useState('');

  function checkPasswordStrength(){
      console.log("value is ",value)

      if(value.trim()===""){
        setIndicator("Weak Password")
        return;
      }
      const checkLength=value.length;
      const numberChecked=/\d/.test(value);
      const upperCaseChecked=/[A-Z]/.test(value);
      const lowerCaseChecked=/[a-z]/.test(value);
      const specialChar= /[!@#$%^&*()_-]/.test(value);

      let count=0;
      if(checkLength>=8){
          count++;
      }
      if(numberChecked){
          count++;
      }
      if(upperCaseChecked){
          count++;
      }
      if(lowerCaseChecked){
          count++;
      }
      if(specialChar){
          count++;
      }
      
      if(count===1){
        console.log("Level 1")
        setIndicator("Level 1")
      }
      else if(count===2 || count==3){
        console.log("Level 2");
        setIndicator('Level 2')
      }
      else if(count===4 || count===5){
        console.log("Level 3");
        setIndicator("Level 3")
      }

  }  
  return (
    <div>
         <h2>Password Strength Checker</h2>
         <div>
             <input type='Enter Password' onChange={(e)=>setValue(e.target.value)}/>
             <button onClick={checkPasswordStrength}>check strength</button>
         </div>
         <p style={{fontWeight:"bolder"}}>Strength:{indicator}</p>
    </div>
  )
}

export default Password