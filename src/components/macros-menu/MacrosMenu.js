import React from 'react';
import MacroCard from './MacroCard';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './MacrosMenu.css';

const MacrosMenu = (props) => {
  return (
    <SimpleBar className="menu-layout" autoHide={false} forceVisible={true}>
      <MacroCard firstKey="1" secondKey="2" />
      <MacroCard firstKey="E" secondKey="F" />
      <MacroCard firstKey="G" secondKey="T" />
      <MacroCard firstKey="H" secondKey="9" />
      <MacroCard firstKey="H" secondKey="9" />
      <MacroCard firstKey="H" secondKey="9" />
      <MacroCard firstKey="H" secondKey="9" />
      <MacroCard firstKey="H" secondKey="9" />
      <MacroCard firstKey="H" secondKey="9" />
    </SimpleBar>
  );
};

export default MacrosMenu;
