<template>
  <ul>
    <li v-for='num in [0,1,2,3,4,5,6,7,8,9]'>{{num}}</li>
  </ul> 
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    props: {
      digit: {
        type: Number,
        default: 0,
        required: true,
        validator: function (value) {
          return value >= 0 && value <= 9
        }
      },
      height: Number
    },
    watch: {
      digit(val) {
        this.playEffect()
      }
    },
    mounted() {
      this.playEffect()
    },
    methods: {
      playEffect() {
        Velocity(this.$el, { translateY: -(this.height * this.digit) }, {delay: 100, duration: 800})
      }
    }
  }
</script>
