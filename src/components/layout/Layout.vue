<template>
  <div class="layout"
       :style="{left:attr.x+'px',top:attr.y+'px',width:attr.w+'px',height:attr.h+'px'}">
    <template v-for="item in children">
      <layout v-if="item.type === 'layout'"
              :model="item"
              :attr="item.attr"></layout>
      <ViewContainer v-if="item.type !== 'layout'"
                     :attr="item.attr">
        <component :is="item.type"
                   :model="item"></component>
      </ViewContainer>
    </template>
  </div>
</template>

<style>
.layout {
  position: absolute;
  border: 1px solid royalblue
}
</style>

<script>
export default {
  name: 'layout',
  data() {
    return {
      isLayout: false,
      children: []
    }
  },
  props: {
    model: Object,
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
  },
  mounted() {
    this.children = this.model.children || []
  }
}

</script>
