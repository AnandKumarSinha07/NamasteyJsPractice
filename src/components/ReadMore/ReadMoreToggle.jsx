import React, { useState } from "react";
import './style.css'    


function ReadMoreToggle() {
  
   const text = `React is a popular JavaScript library developed by Facebook for 
                building user interfaces, especially single-page applications. It allows
                developers to create reusable UI components that efficiently update and 
                render as data changes. One of React’s key features is the virtual DOM, 
                which improves performance by minimizing direct manipulation of the actual
                DOM.`;

   const [newText]=useState(text.slice(0,114))
   const [trimText,setTrim]=useState(false);
   const [fullText,setFulltext]=useState(text)
 
  function changeText(){
    setTrim(!trimText);
    setFulltext(fullText)
  }
  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text" data-testid="readmore-text">
        {trimText?fullText:newText}
      </p>
      <button className="readmore-button"
        data-testid="readmore-button"
        onClick={changeText}
      >   
        {trimText?" Read Less":"Read More"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
