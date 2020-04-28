import React from 'react';
import Slider from '../slider/Slider';
import './ToolBar.css';

const remote = window.require('electron').remote;
let settingsWindow;

const ToolBar = (props) => {
  const handleSettingsClick = () => {
    if (settingsWindow) {
      settingsWindow.focus();
      return;
    }

    settingsWindow = new remote.BrowserWindow({
      width: 200,
      height: 200,
    });

    settingsWindow.on('closed', () => {
      settingsWindow = null;
    });
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
