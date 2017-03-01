<template>
  <div id="app">
    <template v-for="item in appCfg">
      <layout :id="item.id" :left="item.x" :top="item.y" :width="item.width" :height="item.height">
        <component :is="item.type" :indiId="item.indiId" style="width:100%;height:100%;"></component>  
      </layout>
    </template>
</div>
</template>

<script>
  import cfg from './appcfg'

  export default {
    data() {
      return {
        appCfg: cfg
      }
    }
  }
</script>

<style>
  body {
    background: #B4DCF1
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>