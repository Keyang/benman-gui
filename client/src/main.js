require('./main.css')
const Vue = require('vue')
const App = require('./App')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
