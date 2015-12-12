require('styles/some_page.scss');

module.exports = {
  show: function() {
    var container = document.getElementById('info');
    container.innerHTML += 'Hello from some_page.js';
  }
};
