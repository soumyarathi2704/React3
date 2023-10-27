import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const allColors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33BB',
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33BB',
    '#00A8E8',
    '#F400A1',
    '#87FF00',
    '#FFD300',
    '#D500F9',
    '#42F4E5',
    '#F9A938',
    '#00F97C',
    '#FF5E00',
  ]; // Additional color variations

  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisibility] = useState(false);

  const handleButtonClick = () => {
    setColorListVisibility(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisibility(false);
  };

  return (
    <div className="color-picker">
      <button
        className="pick-button"
        style={{ backgroundColor: selectedColor }}
        onClick={handleButtonClick}
      >
        Pick a Color
      </button>
      {isColorListVisible && (
        <div className="color-container">
          {allColors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;