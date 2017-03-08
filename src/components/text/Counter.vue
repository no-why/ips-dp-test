<template>
  <div class="counter-con">
    <span v-if="config.prefix.content !== ''" class="counter-prefix counter-fix" :style="{marginRight:config.prefix.marginRight + 'px',
        color:pStyle.color,fontSize:pStyle.fontSize+ 'px',fontWeight:pStyle.fontWeight}">
      {{config.prefix.content}}
    </span>
    <div class="counter-num-con" :style="{color:nStyle.color,fontSize:nStyle.fontSize + 'px',fontWeight:nStyle.fontWeight}">
      <template v-for="item in numbers">
        <counter-item v-if="item !== '.' && item !== ','" class="counter-item" :height="clientHeight" :digit="Number(item)" :style="{marginRight:config.numbers.letterSpacing + 'px'}"></counter-item>
        <ul v-if="item === '.' || item === ','" class="counter-item">
          <li>{{item}}</li>
        </ul>
      </template>
    </div>
    <span v-if="config.suffix.content !== ''" class="counter-suffix counter-fix" :style="{marginLeft:config.suffix.marginleft + 'px',
        color:sStyle.color,fontSize:sStyle.fontSize+ 'px',fontWeight:sStyle.fontWeight}">
       {{config.suffix.content}}
    </span>
  </div>
</template>

<style>
  .counter-con {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: flex-start;
    white-space: nowrap;
    overflow: hidden;
  }

  .counter-fix {
    display: flex;
    align-items: center;
    margin: 0 8px;
  }

  .counter-num-con {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
  }

  .counter-item {
    list-style: none;
    margin: 0 3px;
    padding: 0;
  }

  .counter-item li {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>

<script>
  import counterItem from './CounterItem.vue'
  import _ from 'lodash'

  export default {
    props: {
      model: {
        type: Object
      }
    },
    data() {
      return {
        clientHeight: 50,
        numbers: [],
        pStyle: {},
        nStyle: {},
        sStyle: {},
        config: {
          prefix: {
            content: '',
            marginRight: 8,
            textStyle: {
              color: '#FF0',
              fontSize: 25,
              fontWeight: ''
            }
          },
          numbers: {
            textStyle: {
              color: '#FF0',
              fontSize: 25,
              fontWeight: ''
            },
            letterSpacing: 3,
            decimal: 2,
            thousands: false
          },
          suffix: {
            content: '',
            marginLeft: 8,
            textStyle: {
              color: '#FF0',
              fontSize: 25,
              fontWeight: ''
            }
          }
        }
      }
    },
    mounted() {
      this.mergeConfig()
      this.init()

      let vm = this
      setInterval(function () {
        vm.formatNumber((Math.random() * 100))
      }, 5000)
    },
    methods: {
      init() {
        this.clientHeight = this.$el.clientHeight
        this.getNumArr(4243.7898)
      },
      mergeConfig() {
        this.config = _.defaultsDeep(this.model.config || {}, this.config)
        this.pStyle = this.config.prefix.textStyle
        this.nStyle = this.config.numbers.textStyle
        this.sStyle = this.config.suffix.textStyle
      },
      updateLayout() {
        this.mergeConfig()
      },
      getNumArr(num) {
        if (typeof num === 'number' && !isNaN(num)) {
          this.numbers = this.formatNumber(num, this.config.numbers.decimal, this.config.numbers.thousands).toString().split('')
        }
      },
      formatNumber(num, decimal, thousands) {
        let n = parseFloat(num).toFixed(decimal)
        if (thousands) {
          let re = /(\d{1,3})(?=(\d{3})+(?:\.))/g
          return n.replace(re, '$1,')
        }
        return n
      }
    },
    components: {
      'counter-item': counterItem
    }
  }

</script>