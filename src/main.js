import Vue from 'vue'
import App from './App.vue'


// Importando bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// Css propios
import './assets/css/main.css';

import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
