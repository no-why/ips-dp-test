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
          series: [{
            name: '黑色外圈细',
            type: 'gauge',
            radius: '97%',
            startAngle: 250,
            endAngle: -70,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [0.2, '#000'],
                  [0.8, '#000'],
                  [1, '#000']
                ],
                width: 4,
                shadowColor: '#0d4b81', // 默认透明
                shadowOffsetX: 0,
                shadowOffsetY: -3,
                shadowBlur: 20,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '蓝色外圈粗1',
            type: 'gauge',
            radius: '99%',
            startAngle: -65,
            endAngle: -115,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#00fffc']
                ],
                width: 10,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '蓝色外圈粗2',
            type: 'gauge',
            radius: '99%',
            startAngle: -155,
            endAngle: 155,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#00fffc']
                ],
                width: 10,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '蓝色外圈粗3',
            type: 'gauge',
            radius: '99%',
            startAngle: 25,
            endAngle: -25,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#00fffc']
                ],
                width: 10,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '蓝色外圈粗4',
            type: 'gauge',
            radius: '99%',
            startAngle: 115,
            endAngle: 65,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#00fffc']
                ],
                width: 10,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '内圈小',
            type: 'gauge',
            radius: '70%',
            startAngle: 359.9,
            endAngle: 0,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#31ada9']
                ],
                width: '100%',
                shadowColor: '#31ada9', // 默认透明
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            data: [{
              value: '',
              name: ''
            }]
          }, {
            name: '内圈',
            type: 'gauge',
            radius: '65%',
            startAngle: 245,
            endAngle: -65,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#000']
                ],
                width: '100%',
                shadowColor: '#31ada9', // 默认透明
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                opacity: 1
              }
            },
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            pointer: { // 仪表盘指针。
              length: '1%',
              width: 0
            },
            detail: {
              offsetCenter: [0, -20],
              formatter: function(value) {
                return value + '%'
              },
              textStyle: {
                color: '#FFF'
              }
            },
            data: [{
              value: '78.5',
              name: ''
            }]
          }]
        }
      }
    }
  }
</script>