<template>
  <div class="swiper-sec">
    <div class="swiper-main" @touchstart="touchstart" @touchmove="touchmove">
      <div class="item-sec" :class="{'move-sec-left': move && pageAru}">
        <swiper-item v-for="(item, index) in itemList.slice(0, 10)" :key="index"
        :img="item.img" :content="item.content"></swiper-item>
      </div>
      <div class="item-sec hide-sec" :class="{'move-sec': move}"
      v-if="itemList.length > 10">
        <swiper-item v-for="(item, index) in itemList.slice(10, 20)" :key="index"
        :img="item.img" :content="item.content"></swiper-item>
      </div>
    </div>
    <div class="dot-sec">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot  move-dot" :class="{'dot-move': move}"></span>
    </div>
  </div>
</template>

<script>
import swiperItem from './homeSwiperItem'

export default {
  props: ['itemList'],
  data () {
    return {
      move: false,
      pageAru: false,
      clickStart: 0,
      moveStart: 0,
      diff: 0
    }
  },
  mounted () {
    if (this.itemList.length > 10) {
      this.pageAru = true
    }
  },
  methods: {
    touchstart: function (e) {
      this.clickStart = e.targetTouches[0].clientX
    },
    touchmove: function (e) {
      this.moveStart = e.targetTouches[0].clientX
      this.diff = +(this.moveStart - this.clickStart)
      if (this.diff > 0) {
        this.move = false
      } else {
        this.move = true
      }
      this.clickStart = this.moveStart
    }
  },
  components: {
    swiperItem
  }
}
</script>

<style scoped>
.swiper-sec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.swiper-main {
  overflow: hidden;
  position: relative;
}

.hide-sec {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(100vw);
}

.move-sec {
  transform: translateX(0vw);
}

.move-sec-left {
  transform: translateX(-100vw);
}

.item-sec {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item-sec,
.hide-sec,
.dot-move,
.move-dot {
  transition: all ease-in-out .5s;
}

.dot-sec {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .3rem 0;
}

.dot {
  display: block;
  margin: 0 .1rem;
  height: .15rem;
  width: .8rem;
  background-color: rgba(0, 0, 0, .1);
}

.move-dot {
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, .2);
}

.dot-move {
  transform: translateX(1rem);
}
</style>
