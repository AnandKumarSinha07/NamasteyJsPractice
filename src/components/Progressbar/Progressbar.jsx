import React, { useState } from "react";

function Progressbar() {

  const [value,setValue]  = useState(0);
  const [color,setColor]=useState('white')
 
 // 0 10 20
 // color red width 10
 // 10 20 30

  function increament(){
    if(value<100){
         setValue(value+10);
         if(value>=0 && value<40){
            setColor("red")
         }
         if(value>=40 && value<80){
            setColor("orange")
         }
         if(value>=80){
            setColor("green")
         }
         console.log("increament",value)
    }
  }

  function decrement(){
    if(value>0)
        {
            setValue(value-10);
            if(value>=0 && value<40){
               setColor("red")
            }
            if(value>=40 && value<80){
                setColor("orange")
            }
            if(value>=80){
                setColor("green")
            }
            console.log("decreament",value)
       }
  }

  return (
    <div>
      <div
        style={{
          backgroundColor:color,
          width: value+"%",
          padding: "21px 23px",
        }}
      >{value}%</div>
      <div style={{ display: "flex", gap: "30px", marginTop:"10px"}} id="testBgColor">
        <button onClick={increament}>+10%</button>
        <button onClick={decrement}>-10%</button>
      </div>
    </div>
  );
}

export default Progressbar;
