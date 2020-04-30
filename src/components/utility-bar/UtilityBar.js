import React from 'react';
import './UtilityBar.css';

const electron = window.require('electron').remote;
const app = electron.app;

const UtilityBar = (props) => {
  const handleAddClick = () => {
    props.setView('add');
  };

  return (
    <div className="utlilty-bar-layout">
      <div className="add-button" onClick={() => handleAddClick()}>
        ADD
      </div>
      <div className="exit-button" onClick={() => app.exit(0)}>
        EXIT
      </div>
    </div>
  );
};

export default UtilityBar;
