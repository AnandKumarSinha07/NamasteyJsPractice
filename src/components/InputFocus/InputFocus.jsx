import React, { useRef } from 'react';

function InputFocus() {

  let focusedValue = useRef(null);

  function handleOnFocus() {
    console.log("focused value ",focusedValue.current)
    console.log("focused  ",focusedValue)
    focusedValue.current.focus();
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>

      <input
        type="text"
        placeholder="Type here"
        ref={focusedValue}
        style={{
          padding: '8px', fontSize: '16px', marginRight: '10px',
        }} />
         
      <button style={{ padding: '8px 12px' }}
        onClick={handleOnFocus} 
      >
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
