const electron = require('electron');
const path = require('path');
const url = require('url');
const app = electron.app;
electron.Menu.setApplicationMenu(false);

let mainWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
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
