<template>
  <div :id="id" class="view-item" @click="abd(2)"
       :style="{left:defaultAttr.x +'px',top:defaultAttr.y+'px',width:defaultAttr.w+'px',height:defaultAttr.h+'px',zIndex:defaultAttr.zIndex}">
    <slot></slot>
  </div>
</template>

<style>
  .view-item {
    position: absolute;
    border: 1px solid blue
  }

</style>

<script>
  import _ from 'lodash'

  export default {
    name: 'ViewContainer',
    props: {
      id: {
        type: String
      },
      attr: Object
    },
    data() {
      return {
        defaultAttr: {
          x: 100,
          y: 100,
          w: 800,
          h: 600,
          zIndex: 0
        }
      }
    },
    created() {
      this.defaultAttr = _.defaultsDeep(this.attr || {}, this.defaultAttr)
    },
    methods: {
      abd() {
        alert(2)
      }
    }
  }

</script>
