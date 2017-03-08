<template>
  <div class="text-time" :style="{textAlign:config.textStyle.textAlign,
    color:config.textStyle.color,fontSize:config.textStyle.fontSize+'px',
    fontWeight:config.textStyle.fontWeight,fontFamily:config.textStyle.fontFamily}">
    {{val}}
    </div>
</template>

<style>
  .text-time {
    position: relative;
    overflow: hidden;
    text-align: left;
    color: white;
    font-size: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>

<script>
  import _ from 'lodash'

  export default {
    props: {
      model: Object
    },
    data() {
      return {
        val: '2017-03-06 11:45',
        config: {
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 20,
            textAlign: 'left'
          },
          format: 'yyyy-MM-dd hh:mm:ss'
        },
        data: {
          type: 'system',
          indi: {
            id: '',
            valKey: 'value'
          }
        }
      }
    },
    mounted() {
      this.config = _.defaultsDeep(this.model.config || {}, this.config)
      if (this.data.type === 'system') {
        this.setSystemTime()
      } else {
        this.setIndiTime()
      }
    },
    methods: {
      setSystemTime(d, format = this.config.format) {
        let self = this
        setInterval(() => {
          self.val = (new Date()).pattern(format)
        }, 1000)
      },
      setIndiTime() {
        this.val = new Date().pattern('yyyy-MM-dd hh时')
      }
    }
  }

</script>