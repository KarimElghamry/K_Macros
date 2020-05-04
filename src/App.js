import React, {useState} from 'react';
import ToolBar from './components/tool-bar/ToolBar';
import MacrosMenu from './components/macros-menu/MacrosMenu';
import Utilitybar from './components/utility-bar/UtilityBar';
import AddMenu from './components/add-menu/AddMenu';
import FrameBar from './components/frame-bar/FrameBar';
import SettingsMenu from './components/settings-menu/SettingsMenu';

const ipcRenderer = window.require('electron').ipcRenderer;
const data = ipcRenderer.sendSync('get-config', '');

const App = () => {
  const [config, setConfig] = useState(data);
  const [view, setView] = useState('home');

  let display;
  if (view === 'home') {
    display = (
      <div
        className="flex-grid"
        style={{
          animation: 'opacity-anim',
          animationDuration: '1s',
          height: 'calc(100vh - 30px)',
        }}
      >
        <ToolBar
          config={config}
          setConfig={setConfig}
          setView={setView}
        ></ToolBar>
        <MacrosMenu config={config} setConfig={setConfig}></MacrosMenu>
        <Utilitybar setView={setView}></Utilitybar>
      </div>
    );
  } else if (view === 'add') {
    display = (
      <AddMenu
        setView={setView}
        config={config}
        setConfig={setConfig}
      ></AddMenu>
    );
  } else if (view === 'settings') {
    display = (
      <SettingsMenu
        setView={setView}
        config={config}
        setConfig={setConfig}
      ></SettingsMenu>
    );
  }

  return (
    <div>
      <FrameBar></FrameBar>
      {display}
    </div>
  );
};

export default App;
