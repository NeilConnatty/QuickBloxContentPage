var QBApp = {
  appId: 47494,
  authKey: 'L4dNxN85Gc7ahq2',
  authSecret: '7DYCYRMnXXvknmP'
};

var QBUser = {
 login: "surgeon",
 password: "asdfqwerty"
};

var CONFIG = {

};

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, CONFIG);
console.log("initialized QB");