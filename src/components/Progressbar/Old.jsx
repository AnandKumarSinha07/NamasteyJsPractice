import React, { useState } from "react";

function Progressbar() {

  let [value,setValue]  = useState(0);
 
 // chracter count
  // 40 par orange
  // 0 se 30 red
  let color = "white";
  if (value > 0 && value < 40) color = "red";
  else if (value >= 40 && value <= 79) color = "orange";
  else if (value >= 80) color = "green";

  function increament(){
    if(value<100){
        setValue(value+10)
    }
  }

  function decrement(){
    if(value>0){
      setValue(value-10);
    }
  }

  

  return (
    <div>
      <div
        style={{
          backgroundColor:color,
          value:value,
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
