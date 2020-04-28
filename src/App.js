import React from 'react';
import ToolBar from './components/tool-bar/ToolBar';
import MacrosMenu from './components/macros-menu/MacrosMenu';

const App = () => {
  return (
    <div className="flex-grid">
      <ToolBar></ToolBar>
      <MacrosMenu></MacrosMenu>
      <div className="row"></div>
    </div>
  );
};

export default App;
