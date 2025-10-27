import React, { useState } from "react";

function MortgageCalculator() {
    const [principal, setPrincipal] = useState();
    const [rate, setRate] = useState();
    const [time, setTime] = useState();
    const [answer, setAnwer] = useState("");
  const [invalid, setInvalid] = useState("");

  function calculation() {
    console.log("principal",principal)
    if (principal === undefined && rate === undefined && time === undefined) {
      setInvalid("Monthly Payment:Invali input");
      return;
    }
    const annual_interest_rate = rate / (12 * 100);
    const total_months = time * 12;
    const numerator =
      annual_interest_rate * Math.pow(1 + annual_interest_rate, total_months);
    const denomiator = Math.pow(1 + annual_interest_rate, total_months) - 1;
    const solution = (principal * numerator) / denomiator;
    const rounfOff = solution.toFixed(2);
    setAnwer(rounfOff);
    setPrincipal("");
    setRate("");
    setTime("");
  }

  return (
    <div>
      <div>
        <label htmlFor="loan-amount">Loan Amount (INR):</label>
        <input
          type="number"
          onChange={(e) => setPrincipal(e.target.value)}
          value={principal}
        />
       <label htmlFor="annual-interest">Annual Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
          <label htmlFor="loan-term">Loan Term (Years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button onClick={calculation}>Calculate</button>

      {answer ? `Monthly Payment ${answer} ` : ""}
      {invalid ? <p>{invalid}</p> : ""}

    </div>
  );
}

export default MortgageCalculator;
