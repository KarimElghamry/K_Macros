const electron = require('electron');
const path = require('path');
const url = require('url');
const ioHook = require('iohook');
const ks = require('node-key-sender');

const ipcMain = electron.ipcMain;
const app = electron.app;
electron.Menu.setApplicationMenu(false);

let mainWindow;
let config = {
  isEnabled: true,
  keyMapping: {
    '2': ['1'],
    '1': ['3', '5'],
  },
};

let keysPressed = [];

ipcMain.on('get-config', (event, args) => {
  event.returnValue = config;
});

ipcMain.on('set-config', (event, args) => {
  config = args;
});

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
    frame: false,
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../public/index.html'),
        protocol: 'file',
        slashes: true,
      })
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on(
    'new-window',
    (event, url, frameName, disposition, options, additionalFeatures) => {
      if (frameName === 'modal') {
        event.preventDefault();
        Object.assign(options, {
          modal: true,
          width: 200,
          height: 200,
        });
        event.newGuest = new electron.BrowserWindow(options);
      }
    }
  );

  ks.setOption('startDelayMillisec', 0);
  ks.setOption('globalDelayBetweenMillisec', 200);

  ioHook.on('keydown', async (e) => {
    if (!config.isEnabled) return;
    if (keysPressed.includes(String.fromCharCode(parseInt(e.rawcode)))) return;

    keysPressed.push(String.fromCharCode(parseInt(e.rawcode)));
    let eminem = config.keyMapping[String.fromCharCode(parseInt(e.rawcode))];
    ks.sendKeys(eminem);
  });

  ioHook.on('keyup', (e) => {
    keysPressed = keysPressed.filter(
      (v) => v !== String.fromCharCode(parseInt(e.rawcode))
    );
  });

  ioHook.start();

  mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
