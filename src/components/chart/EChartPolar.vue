<template>
  <echart :options="option" style="width:100%;height:100%;"></echart>
</template>

<script>
  export default {
    props: {
      indiId: String
    },
    mounted() {
      // let self = this
      // self.$http.get(`/api/demo/indicator/${this.indiId}`).then(function(response) {
      //   console.log(response.data.data)
      // })
    },
    data() {
      return {
        option: {
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: (function() {
              var data = []
              for (var i = 0; i <= 360; i++) {
                var t = i / 180 * Math.PI
                var r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
              }
              return data
            })()
          }],
          animationDuration: 2000
        }
      }
    }
  }
</script>