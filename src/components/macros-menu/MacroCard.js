import React from 'react';
import './MacrosMenu.css';

const MacroCard = props => {
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
            src={require ('../../assets/images/keyboard-key.png')}
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
            src={require ('../../assets/images/keyboard-key.png')}
            className="keyboard-key-icon"
          />
          <div className="key-label">{props.secondKey}</div>
        </div>

        <div className="delete-macro-button" />
      </div>
    </div>
  );
};

export default MacroCard;
