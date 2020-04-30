import React from 'react';
import './FrameBar.css';

const remote = window.require('electron').remote;

const FrameBar = () => {
  const handleMinimize = () => {
    remote.getCurrentWindow().minimize();
  };

  const handleExit = () => {
    remote.app.exit(0);
  };

  return (
    <div className="frame-bar-layout">
      <div
        className="circle-button"
        style={{backgroundColor: 'yellow'}}
        onClick={() => handleMinimize()}
      ></div>
      <div className="circle-button" style={{backgroundColor: 'green'}}></div>
      <div
        className="circle-button"
        style={{backgroundColor: 'red'}}
        onClick={() => handleExit()}
      ></div>
    </div>
  );
};

export default FrameBar;
