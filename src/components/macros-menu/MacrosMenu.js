import React from 'react';
import MacroCard from './MacroCard';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './MacrosMenu.css';

const MacrosMenu = (props) => {
  const config = props.config;
  const keyMapping = config.keyMapping;

  let cards = [];

  for (var key in keyMapping) {
    const mappings = keyMapping[key];
    // eslint-disable-next-line no-loop-func
    const addedCards = mappings.map((v) => (
      <MacroCard
        key={key + v}
        firstKey={key}
        secondKey={v}
        config={config}
        setConfig={props.setConfig}
      ></MacroCard>
    ));
    cards.push(addedCards);
  }

  return (
    <SimpleBar className="menu-layout" autoHide={false} forceVisible={true}>
      {cards}
    </SimpleBar>
  );
};

export default MacrosMenu;
