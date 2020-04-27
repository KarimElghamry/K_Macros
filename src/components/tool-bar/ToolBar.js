import React from 'react';
import Slider from '../slider/Slider';
import './ToolBar.css';

const ToolBar = (props) => {
  const handleSettingsClick = () => {
    window.open('', 'modal');
  };

  return (
    <div className="row toolbar-layout">
      <img
        className="settings-icon"
        alt=""
        src={require('../../assets/images/settings.jpg')}
        onClick={() => handleSettingsClick()}
      ></img>
      <Slider></Slider>
    </div>
  );
};

export default ToolBar;
