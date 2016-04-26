
var MARGIN = 16;
var MARGIN_LARGE = 50;


var page = new tabris.Page({
  title: "Login!",
  topLevel: true
});


var logoImage = new tabris.ImageView({
  image: getImage(0),
  layoutData: {top: MARGIN, width: 200, height: 200, centerX: 0},
  scaleMode: 'fit'
}).appendTo(page);


var userLabel = new tabris.TextView({
  id: "userLabel",
  layoutData: {centerX: 0, top: [logoImage, MARGIN_LARGE]},
  text: "Usuario"
}).appendTo(page);

var userText = new tabris.TextInput({
  id: "user",
  layoutData: {centerX: 0, top: [userLabel, MARGIN]}
}).appendTo(page);


var passwordLabel = new tabris.TextView({
  id: "passwordLabel",
  layoutData: {centerX: 0, top: [userText, MARGIN_LARGE]},
  text: "Contraseña"
}).appendTo(page);

var passwordrText = new tabris.TextInput({
  id: "password",
  type: "password",
  layoutData: {centerX: 0, top: [passwordLabel, MARGIN]}
}).appendTo(page);

var button = new tabris.Button({
  text: "Entrar ->",
  layoutData: {centerX: 0, top: [passwordrText, MARGIN_LARGE]}
}).appendTo(page);

button.on("select", function() {
  page.children("TextInput").apply({visible: false});
  page.children("TextView").apply({visible: false});
  page.children("Button").apply({visible: false});
  userText.set("text", "Ok!");
});

page.open();