import React, { useState } from "react";


function ChipsInput() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function KeyDown(e) {
    if (text.trim() !== "" && e.key === "Enter") {
      setList([...list, text]);
      setText("");
    }
  }

    function deleteItem(index){
         console.log("index to delete",index) 
         const filter=list.filter((__,i)=>i!==index);
          setList(filter)
          console.log("filter",filter)        
    }

  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => KeyDown(e)}
      />

      <div  style={{ display: "flex", flexDirection: "row" ,gap:"8px",marginTop:"10px" ,justifyContent:"center",alignContent:"center"}}>

        {list.map((item, index) => {
          return (
            <div key={index}>
              <button>
                  {item}
                  <span onClick={()=>deleteItem(index)} style={{color:"red"}}>X</span>
              </button>   
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ChipsInput;
