import React, { useState } from "react";
import "./styles.css";

function AsteriskFieldValidation() {

  const [Name, setName] = useState('');
  const [Location, setLocation] = useState('');
  const [NameError, setNameError] = useState('');
  const [LocationError, setLocationError] = useState('');
  const [Nameaction, setNameAction] = useState('');
  const [Locationaction, setLocationAction] = useState('');
  const [field, setField] = useState(false);

  const FormControl = () => {
    console.log('Name is', Name)
    console.log('Location is ', Location)
    if (Name && Location === '') {
      setLocationError('Location is required.');
      setField(false)
      return;
    }
    if (Location && Name === '') {
      setNameError('Name is required.');
  
      setField(false)
      return;
    }
    if (Name === '') {
      setNameError('Name is required.');
      setField(false)
    }
    if (Location === '') {
      setLocationError('Location is required.');
   
      setField(false)
    }
    else {
      setNameAction(Name);
      setLocationAction(Location);
      setField(true);
    }
    setName('');
    setLocation('');

  }

  return (
    <div className="container" >
      <h1 className="title">Asterisk Field Validation</h1>

      <form className="form" onSubmit={(e) => e.preventDefault()} data-testid="form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            data-testid="name-input"
          />
        </div>
        {NameError && (<p data-testid="name-error" className="error">{NameError}</p>)}

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className="input"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            value={Location}
            data-testid="location-input"
          />
        </div>
        {LocationError && (<p data-testid="location-error" className="error">{LocationError}</p>)}

        <button type="submit" className="submit-button"
          onClick={FormControl}
          data-testid="submit-button"
        >Submit</button>
      </form>
      {field ? (
        <div className="success-message" data-testid="success-message">
          <p>Submitted Successfully!</p>
          <p>Name: {Nameaction}</p>
          <p>Location: {Locationaction}</p>
        </div>
      ) : ('')}
    </div>
  );
}

export default AsteriskFieldValidation;
