var electron=require("electron");
var app=electron.app;
var mainWindow;
app.on("ready",function(){
  mainWindow = new electron.BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL("file://"+__dirname+"/client/dist/index.html");
  mainWindow.on("close",function(){
    mainWindow=null;
  });
})