<template>
  <div class="text-indi" :style="{display:(config.global.arrangement?'block':'flex')}">
    <div class="text-indi-label" :style="{color:tStyle,fontSize:tStyle.fontSize+'px',
        fontWeight:tStyle.fontWeight,
        marginBottom:(config.global.arrangement?(config.global.distance+'px'):0),
        marginRight:(config.global.arrangement?0:(config.global.distance+'px'))}">
      {{config.title.content}}
    </div>
    <div :style="{height:(config.global.arrangement?(config.global.counterHeight+'px'):'100%')}">
      <counter :config="((this.model || { config: {}, counter: {} }).config || { counter: {} }).counter" :data="data">
      </counter>
    </div>
  </div>
</template>

<style>
  .text-indi {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    color: white;
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .text-indi-label {
    white-space: nowrap;
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
        data: 3421.6785,
        tStyle: {},
        config: {
          global: {
            arrangement: 1,
            counterHeight: 60,
            titleHeight: 40,
            distance: 10
          },
          title: {
            content: '今日累计话务量：',
            marginRight: 10,
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
      this.mergeoption()
    },
    methods: {
      mergeoption() {
        this.config = _.defaultsDeep(this.model.config || {}, this.config)
        this.tStyle = this.config.title.textStyle
      },
      updateLayout() {
        this.mergeoption()
      }
    }
  }

</script>