require('normalize.css');
require('styles/App.scss');

if (_env == 'pro') {
  window.console.log(_env);
  // require('zzzz.js');
}

var showLoadingState = function() {
  var container = document.getElementById('loadingInfo');
  container.innerHTML += 'Loading...';
};

var hideLoadingState = function() {
  var container = document.getElementById('loadingInfo');
  container.innerHTML += 'done';
};

if (window.location.pathname === '/some_page') {
  showLoadingState();
  require.ensure([], function() { // this syntax is weird but it works
    hideLoadingState();
    require('./some_page').show(); // when this function is called, the module is guaranteed to be synchronously available.
  });
} else if (window.location.hash === '/some_other_page') {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./some_page').show();
  });
} else {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./profile_page').show();
  });
}

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Hello?!!</h1>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
