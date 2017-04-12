<template>
  <ul :class="classFlag">
    <li v-for='num in [0,1,2,3,4,5,6,7,8,9]'>{{num}}</li>
  </ul>
</template>

<script>
  export default {
    props: {
      effectFlag: Boolean,
      classFlag: {
        type: Boolean,
        default: false
      },
      digit: {
        type: Number,
        default: 0,
        required: true,
        validator(value) {
          return value >= 0 && value <= 9
        }
      }
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
        let vm = this.$el
        if (this.effectFlag) {
          vm.style.transform = 'translateY(0)'
        } else {
          let radomY = (Math.random() * 10).toFixed(0)
          vm.style.animation = 'counter-slider-' + radomY + '-' + this.digit + ' 1.2s ease-in'
          vm.style.transform = 'translateY(-' + this.digit + '00%)'
        }
      }
    }
  }

</script>
