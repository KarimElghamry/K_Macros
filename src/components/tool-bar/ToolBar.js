import React from 'react';
import Slider from '../slider/Slider';
import './ToolBar.css';

const ToolBar = (props) => {
  const handleSettingsClick = () => {
    props.setView('settings');
  };

  return (
    <div className="row toolbar-layout">
      <img
        className="settings-icon"
        alt=""
        src={require('../../assets/images/settings.jpg')}
        onClick={() => handleSettingsClick()}
      ></img>
      <div className="toolbar-title-layout">
        <div>KEY</div>
        <div>MAPPING</div>
      </div>
      <Slider {...props}></Slider>
    </div>
  );
};

export default ToolBar;
