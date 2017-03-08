<template>
  <layout id="app" :model="appCfg" :attr="attr"></layout>
</template>

<script>
  import cfg from './appcfg'

  export default {
    data() {
      return {
        appCfg: cfg,
        attr: cfg.attr
      }
    }
  }

</script>

<style>
  body {
    background: #014d75
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>