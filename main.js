const { app, BrowserWindow} = require('electron');
//const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    //icon: path.join(__dirname, 'Imagenes', 'Icono.jpg'), // Ruta al icono
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Necesario para usar ipcRenderer sin restricciones
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools(); // Abre las herramientas de desarrollo para depuración
});

