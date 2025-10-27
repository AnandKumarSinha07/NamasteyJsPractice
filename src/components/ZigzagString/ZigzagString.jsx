import { useState } from "react";
import "./styles.css";

const ZigzagString = () => {
  const [input, setInput] = useState("");
  const [result,setResult]=useState('');

  function submitButton() {

    const split = input.split(",");
    let newString = "";

    for ( let i = 0; i < split.length; i++){
      if (i % 2 == 0) {
        newString += split[i];
      } else if(i%2!=0){
        let arr=split[i].split('');
        let start = 0,end = arr.length - 1;

        while (start <= end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
         newString+= arr.join("");    
      }
      setResult(newString);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="submit-button" onClick={submitButton}>
        Submit
      </button>
      <p data-testid="output-result">Output:{result}</p>
    </div>
  );
};

export default ZigzagString;
