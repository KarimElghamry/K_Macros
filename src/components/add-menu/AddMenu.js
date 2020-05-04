import React from 'react';
import './AddMenu.css';

const ipcRenderer = window.require ('electron').ipcRenderer;
const dialog = window.require ('electron').remote.dialog;
const remote = window.require ('electron').remote;

function dfs (mapping, key, visited) {
  if (visited.includes (key)) return false;
  if (!mapping[key]) return true;

  visited.push (key);
  for (const element of mapping[key]) {
    let temp = dfs (mapping, element, visited);
    if (!temp) return false;
  }

  return true;
}

const AddMenu = props => {
  const config = props.config;
  const keyMapping = config.keyMapping;
  let first, second;

  let handleApplyClick = () => {
    if (first.value === '') return;
    if (second.value === '') return;

    first.value = first.value.toUpperCase ();
    second.value = second.value.toUpperCase ();
    let newConfig = JSON.parse (JSON.stringify (config));

    if (!keyMapping[first.value]) {
      newConfig.keyMapping[first.value] = [second.value];
    } else {
      newConfig.keyMapping[first.value].push (second.value);
    }

    let visited = [];
    let eminem = dfs (newConfig.keyMapping, first.value, visited);

    if (!eminem) {
      let options = {
        type: 'error',
        message: 'Invalid Macro.',
        detail: 'A macro loop was detected.',
      };
      dialog.showMessageBox (remote.getCurrentWindow (), options);
      return;
    }

    ipcRenderer.sendSync ('set-config', newConfig);
    props.setConfig (newConfig);
    props.setView ('home');
  };

  return (
    <div className="add-menu-layout">
      <div className="row-buttons">
        <input type="text" maxLength="1" ref={input => (first = input)} />
        <input type="text" maxLength="1" ref={input => (second = input)} />
      </div>
      <div className="row-buttons">
        <div className="add-button" onClick={() => handleApplyClick ()}>
          APPLY
        </div>
        <div
          className="exit-button"
          onClick={() => {
            props.setView ('home');
          }}
        >
          CANCEL
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
