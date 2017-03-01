// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/Layout.vue'
import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'
/* eslint-disable no-unused-vars */
import chinaData from '../static/mapdata/china.js'
import EChartLine from './components/EChartLine.vue'
import EChartBar from './components/EChartBar.vue'
import EChartGuage from './components/EChartGuage.vue'
import EChartMap from './components/EChartMap.vue'
import EChartPolar from './components/EChartPolar.vue'
import axios from 'ips-axios'

// register the component to use
Vue.component('layout', Layout)
Vue.component('echart', ECharts)
Vue.component('echartLine', EChartLine)
Vue.component('echartBar', EChartBar)
Vue.component('echartGuage', EChartGuage)
Vue.component('echartMap', EChartMap)
Vue.component('echartPolar', EChartPolar)

axios.defaults.headers.common['Authorization'] = 'Basic Ym9jbzpib2NvQDIwMTY='
axios.defaults.headers.common['X-Api-Version'] = 'v1'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
