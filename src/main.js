// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import mui from './assets/js/mui.js'
import {i18n} from './i18n'
import store from './store'
import api from './api'

import './assets/css/mui.css'
import './assets/css/mui.picker.all.css'
import './assets/css/style.css'

Vue.prototype.$mui = mui
Vue.config.productionTip = false
Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
    i18n,
    store,
  router,
  components: { App },
  template: '<App/>'
})
