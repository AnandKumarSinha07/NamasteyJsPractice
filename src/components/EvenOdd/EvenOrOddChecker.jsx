import React, { useState } from "react";
import "./styles.css";

function EvenOrOddChecker() {

  const [number, setNumber] = useState("");
  const [result,setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function checkEvenOdd() {
    setLoading(true);
    setTimeout(() => {
        const new_n = Number(number);
        if(isNaN(new_n)){
            setResult("Please enter a valid number.");
        }else{
            setResult(`The number ${new_n} is ${new_n%2===0?"even":"odd"}.`)
        }
         setLoading(false)
    }, 1000);
  };

  return (
    <div className="even-odd-container" data-testid="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={number}
        data-testid="number-input"
        onChange={(e) => setNumber(e.target.value)}
      />

      <button className="check-button" onClick={checkEvenOdd} data-testid="check-button">
        Check
      </button>


       <div className="result-area" data-testid="result-area"> 
               {loading?
                    (<div className="loading" data-testid="loading">Checking....</div>)
                    :result!==null?
                    (<div className="result" data-testid="result">{result}</div>):null 
                }
        </div>
      
    </div>
  );
}

export default EvenOrOddChecker;
