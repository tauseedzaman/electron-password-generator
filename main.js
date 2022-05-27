const {
  app,
  BrowserWindow,
  Menu,
  shell,
} = require("electron");
const path = require("path");
const MenuItem = [{
    label: "Auther",
    submenu: [{
        label: "Website",
        click: () => {
          shell.openExternal("https://linktr.ee/tauseedzaman");
        },
      },
      {
        label: "Code",
        click: () => {
          shell.openExternal("https://linktr.ee/tauseedzaman");
        },
      },
    ],
  },{
    role:"close"
  }
];
const menu = Menu.buildFromTemplate(MenuItem);
Menu.setApplicationMenu(menu);


const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
  });

  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});