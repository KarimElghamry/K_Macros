import React from 'react';
import './MacrosMenu.css';

const ipcRenderer = window.require('electron').ipcRenderer;

const MacroCard = (props) => {
  const config = props.config;

  const handleDelete = () => {
    let newConfig = Object.assign({}, config);
    const currentMapping = config.keyMapping[props.firstKey];
    const newMapping = currentMapping.filter((v) => v !== props.secondKey);
    newConfig.keyMapping[props.firstKey] = newMapping;

    ipcRenderer.send('set-config', newConfig);
    props.setConfig(newConfig);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <div className="card-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            alt=""
            src={require('../../assets/images/keyboard-key.png')}
            className="keyboard-key-icon"
          />
          <div className="key-label">{props.firstKey}</div>
        </div>

        <div className="arrow-separator" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            alt=""
            src={require('../../assets/images/keyboard-key.png')}
            className="keyboard-key-icon"
          />
          <div className="key-label">{props.secondKey}</div>
        </div>

        <div className="delete-macro-button" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};

export default MacroCard;
