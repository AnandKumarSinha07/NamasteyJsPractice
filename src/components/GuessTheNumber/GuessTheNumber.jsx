import React, { useEffect, useState } from "react";
import './styles.css'

function GuessTheNumber() {
  const [data, setData] = useState('');
  const [random, setRandom] = useState(76);
  const [guess, setGuess] = useState("");
  const [count,setCount]=useState(0);
  const [result,setResult]=useState('');

  useEffect(()=>{
     const randomNumber = Math.floor(Math.random() * 100) + 1;
     setRandom(randomNumber);
  },[])

  const handleGuess = () => {

     if (isNaN(guess) || guess < 1 || guess > 100) {
    setGuess("Please enter a number between 1 and 100");
    setResult(""); // clear success message if any
    return;
  }

    if(data.length===0){
        setGuess('Please enter a number between 1 and 100.');
        return;
    }
    if (data > random) {
      setGuess("Too high! Try again");
      setCount(count+1);
    } else if (data < random) {
      setGuess("Too low! Try again");
      setCount(count+1);
    } else {
      setResult("Congratulations! You guessed the number");
      setCount(count+1);
    }
  };

    const resetGame = () => {
        setData('');
        setCount(0);
        setResult('');
        setGuess('');

    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <div className="button_container">
        <button className="button"  onClick={handleGuess}>Check Guess</button>
        <button className="button"  onClick={resetGame}>Reset Game</button>
      </div>

       {guess?<p>{guess}</p>:''}
       {result && <p>{`${result} in ${count} attempts`}</p>}

    </div>
  );
}

export default GuessTheNumber;
