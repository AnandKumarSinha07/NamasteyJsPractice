import { useState } from 'react';

function useToggle(initialValue = false) {

  const [toogle, setToogle] = useState(initialValue);

  function clicked() {
     setToogle(!toogle)
  }
  return [toogle,clicked];
}

export default function App() {
 
  const [isOn, toggle] = useToggle(false);
 
  return (
   
    <button data-testid="toggle-button"
      onClick={toggle}>
       {isOn?"ON" : "OFF"} 
    </button>
  );
}
