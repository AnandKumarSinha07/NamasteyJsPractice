import React, { useState } from "react";
import "./styles.css";

export default function GetWeekday() {


   const [input,setInput]=useState('');  
   const [answer,setAnswer]=useState('');
   const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function calcuateDay(){
       console.log("The date is ",input)
       const d = new Date(input);
       let day = d.getDay()
       console.log("Day is ",day);
       let result=week[day];
       console.log("result is ",result)
       setAnswer(result);
  }  

 
  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        data-testid="date-input"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button data-testid="find-day-btn"
       onClick={calcuateDay} 
        >
        Find Day
      </button>
      {answer  && <p className="result" data-testid="result">That day falls on {answer}!</p>}
    </div>
  );
}
