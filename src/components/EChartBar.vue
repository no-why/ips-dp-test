<template>
  <echart :options="option" style="width:100%;height:100%;"></echart>
</template>

<script>
  export default {
    props: {
      indiId: String
    },
    mounted() {
      let self = this
      self.$http.get(`/api/demo/indicator/${this.indiId}`).then(function(response) {
        console.log(response.data.data)
      })
    },
    data() {
      return {
        option: {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            axisTick: {
              alignWithLabel: true
            }
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            data: [1, 3, 2, 3, 4, 2, 1, 3, 3, 2, 3, 2]
          }],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}'
            }
          }
        }
      }
    }
  }
</script>