import React from 'react';
import ToolBar from './components/tool-bar/ToolBar';

const App = () => {
  return (
    <div className="flex-grid">
      <ToolBar></ToolBar>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default App;
