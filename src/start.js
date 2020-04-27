const electron = require('electron');
const path = require('path');
const url = require('url');
const app = electron.app;

let mainWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    resizable: false,
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
