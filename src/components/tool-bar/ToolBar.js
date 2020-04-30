import React from 'react';
import Slider from '../slider/Slider';
import './ToolBar.css';

const remote = window.require('electron').remote;

const ToolBar = (props) => {
  const handleSettingsClick = () => {};

  return (
    <div className="row toolbar-layout">
      <img
        className="settings-icon"
        alt=""
        src={require('../../assets/images/settings.jpg')}
        onClick={() => handleSettingsClick()}
      ></img>
      <Slider {...props}></Slider>
    </div>
  );
};

export default ToolBar;
