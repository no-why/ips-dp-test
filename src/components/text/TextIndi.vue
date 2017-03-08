<template>
  <div class="text-indi">
    <div class="text-indi-label" :style="{textAlign:config.labelStyle.textAlign,
      color:config.labelStyle.color,fontSize:config.labelStyle.fontSize+'px',
      fontWeight:config.labelStyle.fontWeight,fontFamily:config.labelStyle.fontFamily}">
    </div>
    <div class="text-indi-value" :style="{textAlign:config.valueStyle.textAlign,
      color:config.valueStyle.color,fontSize:config.valueStyle.fontSize+'px',
      fontWeight:config.valueStyle.fontWeight,fontFamily:config.valueStyle.fontFamily}">
      44444
    </div>
  </div>
</template>

<style>
  .text-indi {
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
        config: {
          labelStyle: {
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 30,
            textAlign: 'left'
          },
          valueStyle: {
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 20,
            textAlign: 'left'
          }
        }
      }
    },
    mounted() {
      this.config = _.defaultsDeep(this.model.config || {}, this.config)
    },
    methods: {
      mergeConfig: function (a) {
        (a ? (this.config.theme = _.defaultsDeep(a.theme || {}, this.config.theme), this.config = _.defaultsDeep(a || {}, this.config), this.initColors(this.config), this.config) : this.config)
      },
      updateLayout: function () {
        let cfg = this.config
        if (cfg.global.arrangement === 'top') {
          this.titleDom.css({
            display: 'block',
            'line-height': 'normal',
            margin: 0,
            'margin-bottom': cfg.global.distance || 0
          })
          this.container.css({
            display: 'block',
            alignItems: 'start'
          })
        } else {
          this.titleDom.css({
            display: 'flex',
            margin: 0,
            'margin-right': cfg.global.distance || 0
          })
          this.container.css({
            display: 'flex',
            alignItems: 'flex-end'
          })
        }
      }
    }
  }

</script>