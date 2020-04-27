import React, {useState} from 'react';
import './Slider.css';

const Slider = (props) => {
  const [enabled, setEnabled] = useState(true);
  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <div
      className={`base-slider ${
        enabled ? 'enabled-slider' : 'disabled-slider'
      }`}
      onClick={() => handleClick()}
    >
      <div
        className={enabled ? 'slider-knob-enabled' : 'slider-knob-disabled'}
      ></div>
    </div>
  );
};

export default Slider;
