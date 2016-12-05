require('./css/main.css')
require('./css/components.css')
require('./css/font-awesome.min.css')
const Vue = require('vue')
const App = require('./App')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
