import React, {useState} from 'react';
import './SettingsMenu.css';

const ipcRenderer = window.require('electron').ipcRenderer;

const SettingsMenu = (props) => {
  const config = props.config;
  const [checked, setChecked] = useState(config.enableOnStartup);
  const handleApplyClick = () => {
    let newConfig = JSON.parse(JSON.stringify(config));
    newConfig.enableOnStartup = checked;
    ipcRenderer.sendSync('set-config', newConfig);
    props.setConfig(newConfig);
    props.setView('home');
  };

  return (
    <div className="settings-menu-layout">
      <div className="settings-row">
        <div className="check-box-layout" onClick={() => setChecked(!checked)}>
          {checked ? <div className="check-box-tick"></div> : null}
        </div>
        <div>Enable on application startup</div>
      </div>
      <div
        className="add-button"
        style={{marginLeft: '32%'}}
        onClick={() => handleApplyClick()}
      >
        APPLY
      </div>
    </div>
  );
};

export default SettingsMenu;
