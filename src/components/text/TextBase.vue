<template>
  <div class="text-base" :style="{textAlign:config.textStyle.textAlign,
    color:config.textStyle.color,fontSize:config.textStyle.fontSize+'px',
    fontWeight:config.textStyle.fontWeight,fontFamily:config.textStyle.fontFamily}"> 
    <label class="text-base-inner" v-if="effect.marquee.disable">{{model.text}}</label>
    <marquee v-if="!effect.marquee.disable" behavior="scroll" height="100%" 
      :direction="effect.marquee.direction" style="display:flex;align-items:center"
      :scrollamount="effect.marquee.scrollamount" onstart="this.firstChild.innerHTML+=this.firstChild.innerHTML;">
      {{model.text}}
    </marquee>
  </div>
</template>

<style>
  .text-base {
    position: relative;
    overflow: hidden;
    text-align: left;
    color: white;
    font-size: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .text-base-inner{
    overflow: hidden;
    white-space:nowrap;
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
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 20,
            textAlign: 'left'
          }
        },
        effect: {
          marquee: {
            disable: true,
            direction: 'left',
            scrollamount: 5
          }
        }
      }
    },
    mounted() {
      this.config = _.defaultsDeep(this.model.config || {}, this.config)
      this.effect = _.defaultsDeep(this.model.effect || {}, this.effect)
    }
  }

</script>