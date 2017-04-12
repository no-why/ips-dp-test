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
    type: 'text-indi',
    attr: { x: 650, y: 10, w: 400, h: 60, zIndex:10},
    config: {
      global: {
        arrangement: 0, // 0 左右分布 1:上下分布
        counterHeight: 40,
        distance: 5
      },
      title: {
        content: '累计花费',
        textStyle: {
          color: '#FF0',
          fontSize: 25,
          fontWeight: ''
        }
      },
      counter: {
        justifyContent: 'flex-start',
        prefix: {
          content: '￥',
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
          decimal: 2,
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
      }
    },
    data: {
      default: 123456
    }
  },
  {
    type: 'textArea',
    attr: { x: 630, y: 120, w: 550, h: 150 },
    config: {
      textStyle: {
        color: '#FF0',
        fontWeight: 'bold',
        textAlign: 'center',
        textIndent: 40
      },
      effect: {
        enable: true,
        type: 1,
        interval: 10
      }
    },
    data: {
      default: '韩联社3月7日报道称，韩国外交部发言人赵俊赫7日指出，朝鲜射导后一天内就有中美日俄等18国和联合国等4个国际组织史无前例地表态予以谴责，韩国将与国际社会一起不断加大全方位施压制裁力度。赵俊赫称，朝鲜视安理会决议和不扩散公约如无物，在核武装的不归路上狂奔不止，毫无弃核念头已经昭然若揭，韩国将与国际社会一道不断加大全方位施压制裁力度。赵俊赫还详举马来西亚和德国警告谴责朝鲜之例，奉劝朝方尽早觉悟到国际社会不会对其反复惹事坐视不理。特朗普政府的朝鲜政策尚未成形，韩方将设法使其具体有效地体现遏制朝方继续挑衅及外交施压的方略。包括韩美首脑通话在内的高层全面战略沟通将于3、4月密集展开。'
    }
  }]
}

export default app1Cfg
