import React from 'react';
import './Slider.css';

const ipcRenderer = window.require('electron').ipcRenderer;

const Slider = (props) => {
  const enabled = props.config.isEnabled;

  const handleClick = () => {
    let newConfig = Object.assign({}, props.config);
    newConfig.isEnabled = !enabled;

    ipcRenderer.send('set-config', newConfig);
    props.setConfig(newConfig);
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
