/* eslint-disable */
let app1Cfg = {
  type: 'layout',
  attr: { x: 10, y: 10, w: 1200, h: 600 },
  children: [{
    type: 'layout',
    attr: { x: 0, y: 0, w: 620, h: 400, id: 'group1', class: 'data-group' },
    children: [{
      type: 'textBase',
      attr: { x: 10, y: 10, w: 200, h: 40 },
      text: '全省话务量',
      config: {
        textStyle: {
          fontSize: 30
        }
      }
    }, {
      type: 'timeText',
      attr: { x: 410, y: 20, w: 200, h: 30 },
      config: {
        textStyle: {
          color: '#FF0'
        }
      }
    }]
  },
  {
    type: 'textBase',
    attr: { x: 10, y: 290, w: 200, h: 50 },
    text: '我是标题2',
    config: {
      textStyle: {
        color: '#FF0',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    },
    effect: {
      marquee: {
        disable: false, // 开启走马灯
        direction: 'left', // 走马灯方向
        scrollamount: 10 // 滚动速度
      }
    }
  },
  {
    type: 'counter',
    attr: { x: 310, y: 290, w: 200, h: 50 },
    config: {
      prefix: {
        content: '$',
        marginRight: 8,
        textStyle: {
          color: '#FF0',
          fontSize: 25,
          fontWeight: ''
        }
      },
      numbers: {
        letterSpacing: 2,
        textStyle: {
          color: '#FF0',
          fontSize: 22,
          fontWeight: ''
        },
        decimal: 3,
        thousands: true
      },
      suffix: {
        content: '',
        marginLeft: 8,
        textStyle: {
          color: '#FF0',
          fontSize: 25,
          fontWeight: ''
        }
      }
    },
    data: {
      default: 123456
    }
  },
  {
    type: 'textIndi',
    attr: { x: 650, y: 10, w: 400, h: 40 },
    config: {
      global: {
        arrangement: 'top',
        distance: 0
      },
      title: {
        content: '今日累计话务量：',
        textStyle: {
          fontSize: 30,
          color: '#F00'
        }
      },
      connter: {
        justifyContent: 'flex-start',
        prefix: {
          content: '',
          textStyle: {
            color: '#ffffff',
            fontSize: 25,
          }
        },
        numbers: {
          textStyle: {
            color: '#59ebe8',
            fontSize: 28,
            fontWeight: 'normal'
          },
          marginRight: 0,
          backgroundColor: 'rgba(51, 51, 51, 0)',
          digit: 0,
          rounding: true,
          decimal: 2,
          separatingChart: true
        },
        suffix: {
          content: '',
          textStyle: {
            color: '#ffffff',
            fontSize: 30,
            fontWeight: 'normal'
          }
        }
      }
    }
  }
  ]
}

export default app1Cfg
