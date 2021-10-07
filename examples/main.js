import Vue from 'vue'
import App from './App.vue'

import 'ui-jia/dist/css/index.css';
import UIJIA from 'ui-jia';
Vue.use(UIJIA);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
