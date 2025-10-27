import { useEffect, useState } from 'react';
import './countCh.css'


function CharacterCount() {

  const [maxlength, setMaxLength] = useState(50);
  const [character, setChracter] = useState(0);
  const [limit, setLimit] = useState('');
  const [Overlimit, setOverlimit] = useState('');

  function calculateLimit() {
    const calculation = (character / maxlength) * 100;
    setLimit(calculation);
    console.log("chracter is ", character)
    if (character > maxlength) {
      setOverlimit(character - maxlength);
      console.log("overlimit", Overlimit)
      setLimit('')
    }
    else {
      setOverlimit(0)
    }
  }

  useEffect(() => {
    calculateLimit()
  }, [character])

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input type="number" min="0" max="1000" data-testid="maxlength"
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          onChange={(e) => setChracter(e.target.value.length)}
        ></textarea>

        <div data-testid="char-info">{character} / {maxlength}</div>

        <div className="warnings">
          
          {limit >= 90 ? (
            <p className="warning-text" data-testid="warning-text">
              {"You are close to the limit!"}
            </p>
          ) : (
            ""
          )}
          
          {Overlimit ? (
            <p className="error-message" data-testid="error-text">
              {`Limit exceeded by ${Overlimit} characters`}
            </p>
          ) : ("")}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
