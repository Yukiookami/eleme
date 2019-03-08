<template>
  <div>
    <img class="start-img" :class="{'hide': hideYou}"
    src="../assets/images/start/startScreen.png" alt="">
    <eleme-footer class="footer" :selectNum="0"></eleme-footer>
  </div>
</template>

<script>
import elemeFooter from '../components/elemeFooter'

export default {
  data () {
    return {
      hideYou: false,
      selectNum: 0
    }
  },
  mounted () {
    var that = this
    setTimeout(() => {
      that.hideYou = true
    }, 1200)
    setTimeout(() => {
      that.$router.push('/elemeHome')
    }, 1500)
  },
  components: {
    elemeFooter
  }
}
</script>

<style scoped>
  .start-img {
    width: 100vw;
  }

  .start-img {
    transition: all ease-in-out .35s;
  }

  .hide {
    opacity: 0;
  }

  .footer {
    z-index: -1;
  }
</style>
