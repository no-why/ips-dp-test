<template>
  <div :id="id" class="view-item" :style="{left:attr.x+'px',top:attr.y+'px',width:attr.w+'px',height:attr.h+'px'}">
    <slot></slot>
  </div>
</template>

<style>
  .view-item {
    position: absolute;
    border:1px solid blue
  }
</style>

<script>
  export default {
    props: {
      id: {
        type: String
      },
      attr: {
        type: Object,
        default() {
          return {
            x: 100,
            y: 100,
            w: 800,
            h: 600
          }
        }
      }
    }
  }

</script>