<template>
  <div :id="id" class="layout-module" :style="{left:left+'px',top:top+'px',width:width+'px',height:height+'px'}">
    <slot></slot>
  </div>
</template>

<style>
  .layout-module {
    position: absolute;
  }
</style>

<script>
  export default {
    props: {
      id: {
        type: String
      },
      left: {
        type: Number,
        default: 100
      },
      top: {
        type: Number,
        default: 100
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 300
      }
    }
  }
</script>