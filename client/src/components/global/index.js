var Vue = require('vue')

var components = {
  'clickTextInput': require('./ClickTextInput')
}

for (var key in components) {
  Vue.component(key, components[key])
}
