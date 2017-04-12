<template>
  <div class="text-area">
    <div class="text-area-con" :style="{textAlign: config.textStyle.textAlign,lineHeight: config.textStyle.lineHeight + 'px',textIndent: config.textStyle.textIndent + 'px', color: config.textStyle.color,
        fontWeight: config.textStyle.fontWeight,fontFamily: config.textStyle.fontFamily,fontSize: config.textStyle.fontSize + 'px',}">
      {{renderData}}
    </div>
  </div>
</template>

<style>
  .text-area {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .text-area-con {
    width: 100%;
    height: 100%;
  }

</style>

<script>
  import _ from 'lodash'
  let Velocity

  export default {
    props: {
      model: Object
    },
    data() {
      return {
        data: '',
        renderData: '',
        config: {
          textStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'normal',
            fontFamily: '',
            lineHeight: 30,
            textIndent: 30
          },
          effect: {
            enable: false, // 是否开启滚动
            duration: 1000,
            type: 0, // 0:每行依次向上滚动1:整屏滚动
            interval: 3000
          }
        }
      }
    },
    created() {
      this.renderData = this.data || this.model.data.default
    },
    mounted() {
      this.mergeConfig()
      if (this.config.effect.enable) {
        Velocity = require('velocity-animate')
        this.effect()
      }
    },
    methods: {
      mergeConfig: function (a) {
        this.config = _.defaultsDeep(this.model.config || {}, this.config)
      },
      effect: function () {
        let transLateY = 0
        let vm = this.$el.children
        let vmHeight = vm[0].scrollHeight
        let eachScroll = this.config.effect.type ? this.config.textStyle.lineHeight : vm[0].clientHeight
        setInterval(() => {
          if (transLateY >= vmHeight) {
            /* eslint-disable  */
            let tempData = new String(this.renderData)
            this.renderData = ''
            transLateY = -vm[0].clientHeight
            Velocity(vm, {
              translateY: -transLateY
            }, 0,()=>{
              this.renderData = tempData.toString()
            })
          } else {
            Velocity(vm, {
              translateY: -transLateY
            }, {
              duration: this.config.effect.duration
            })
          }
          transLateY += eachScroll
        }, 1000)
      }
    }
  }

</script>
