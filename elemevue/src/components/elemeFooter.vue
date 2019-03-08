<template>
  <div class="footer">
    <div v-for="(item, index) in footerItem"
    :key="index" class="item-box" @click="select(index)">
      <img v-if="selectNum !== index" :src="item.footerImg" alt="">
      <img v-if="selectNum === index" :src="item.footerSelect" alt="">
      <span :class="{'text-select': selectNum === index}">
        {{item.fooetrText}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['selectNum'],
  data () {
    return {
      footerItem: [
        {
          footerImg: require('../assets/images/footer/elemeLogo.svg'),
          fooetrText: '外卖',
          footerSelect: require('../assets/images/footer/elemeLogo-select.svg')
        },
        {
          footerImg: require('../assets/images/footer/find.svg'),
          fooetrText: '发现',
          footerSelect: require('../assets/images/footer/find-select.svg')
        },
        {
          footerImg: require('../assets/images/footer/dingdan.svg'),
          fooetrText: '订单',
          footerSelect: require('../assets/images/footer/dingdan-select.svg')
        },
        {
          footerImg: require('../assets/images/footer/mine.svg'),
          fooetrText: '我的',
          footerSelect: require('../assets/images/footer/mine-select.svg')
        }
      ]
    }
  }
  // methods: {
  //   select: function (index) {
  //     this.selectNum = index
  //   }
  // }
}
</script>

<style scoped>
.footer {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  background-color: #FFF;
  z-index: 9999;
}

.item-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
  width: 25%;
  height: 3rem;
  font-size: 12px;
  color: #999;
}

.item-box img {
  width: 30%;
}

.text-select {
  color: #1296db;
}
</style>
