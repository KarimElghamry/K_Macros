import React from 'react';
import Slider from '../slider/Slider';
import './ToolBar.css';

const ToolBar = (props) => {
  return (
    <div className="row toolbar-layout">
      <Slider></Slider>
    </div>
  );
};

export default ToolBar;
