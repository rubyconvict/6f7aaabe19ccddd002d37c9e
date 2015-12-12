var Alt = require('alt');

if (process.env == 'dev') {
  // https://github.com/goatslacker/alt-devtool
  var chromeDebug = require('alt/utils/chromeDebug');
}

var alt = new Alt();

if (process.env == 'dev') {
  chromeDebug(alt);
}

module.exports = alt;
