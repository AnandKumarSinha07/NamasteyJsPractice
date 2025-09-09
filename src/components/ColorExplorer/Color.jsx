import React, { useState } from "react";
import { colorNameToHex } from "../ColorExplorer/colorData";
import "./style.css";

const ColorExplorer = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [hexcode, setHexcode] = useState("");
  const [error, setError] = useState(false);

  function colorGenerator() {
    console.log("color is ", value);
    const hexValue = colorNameToHex(value.trim().toLowerCase());

    if (!hexValue) {
      setColor("");
      setHexcode("");
      setError(true);
    } else {
      console.log("hexValue is ", hexValue);
      setHexcode(hexValue);
      setColor(value);
      setError(false);
    }
    setValue("");
  }
  return (
    <div>
      <div className="container">
        <h1>Color Explorer</h1>
        <div className="input-section">
          <input
            type="text"
            data-testid="color-input"
            placeholder="Type a color name e.g. lavender"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button data-testid="search-button" onClick={colorGenerator}>
            🔍
          </button>
        </div>

        <div>
          {error ? (
            <div style={{ color: "red", marginTop: "-20px" ,marginLeft:"-40px",fontSize:"1.1rem",fontWeight:"bolder"}}>
              Sorry,I couldn't recognize that color.
            </div>
          ) : (
            <div className="color-box" data-testid="color-box">
              <div
                className="preview"
                role="presentation"
                style={{ backgroundColor: color }}
                data-testid="color-preview"
              ></div>
              <p data-testid="color-name">
                <strong>Name:{color}</strong>
              </p>
              <p data-testid="color-hex">
                <strong>Hex:{hexcode}</strong>
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ColorExplorer;
