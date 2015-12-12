require('styles/profile_page.scss');

module.exports = {
  show: function() {
    var container = document.getElementById('info');
    container.innerHTML += 'Hello from profile_page.js';
  }
};
