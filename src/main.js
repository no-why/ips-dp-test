// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout/Layout.vue'
import ViewContainer from './components/layout/ViewContainer.vue'
import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'
/* eslint-disable no-unused-vars */
import chinaData from '../static/mapdata/china.js'
/* eslint-disable no-unused-vars */
import DateUtil from './lib/DateUtil.js'
import EChartLine from './components/chart/EChartLine.vue'
import EChartBar from './components/chart/EChartBar.vue'
import EChartGuage from './components/chart/EChartGuage.vue'
import EChartMap from './components/chart/EChartMap.vue'
import EChartPolar from './components/chart/EChartPolar.vue'
import TextBase from './components/text/TextBase.vue'
import axios from 'ips-axios'
import TimeText from './components/text/TimeText.vue'
import TextIndi from './components/text/TextIndi.vue'
import Counter from './components/text/Counter.vue'

// register the component to use
Vue.component('layout', Layout)
Vue.component('ips-view', ViewContainer)
Vue.component('echart', ECharts)
Vue.component('echartLine', EChartLine)
Vue.component('echartBar', EChartBar)
Vue.component('echartGuage', EChartGuage)
Vue.component('echartMap', EChartMap)
Vue.component('echartPolar', EChartPolar)
Vue.component('textBase', TextBase)
Vue.component('timeText', TimeText)
Vue.component('textIndi', TextIndi)
Vue.component('counter', Counter)

axios.defaults.headers.common['Authorization'] = 'Basic Ym9jbzpib2NvQDIwMTY='
axios.defaults.headers.common['X-Api-Version'] = 'v1'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})