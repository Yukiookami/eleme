<template>
  <div class="home-body" @touchmove="touchmove" @touchend="end">
    <!-- 头部 -->
    <div class="header" id="header">
      <div class="header-mono">
        <div class="location">
          <img src="../assets/images/homeHeader/loc.svg" alt="">
          <span>{{locName}}</span>
          <div class="mask"></div>
          <div class="down-j"></div>
        </div>
        <div class="weather-sec">
          <div class="show-w">
            <span>{{wen}}</span>
            <span>{{weather}}</span>
          </div>
          <img :src="weatherImg" alt="">
        </div>
      </div>
      <div class="faker-input" id="fakerInput"
      :class="{'faker-input-fixed': fakerInputFixed}">
        <div class="faker-div">
          <img src="../assets/images/fakerInput/faker-find.svg" alt="">
          <span>{{inputText}}</span>
        </div>
        <img class="QR-img" src="../assets/images/fakerInput/QR.svg" alt="">
      </div>
      <div class="faker-input-fixed-back" v-if="fakerInputFixed"></div>
    </div>
    <!-- 头部end -->
    <!-- banner -->
    <div class="banner-box">
      <img :src="bannerImg" alt="">
    </div>
    <!-- banner end -->
    <!-- 滑块区域 -->
    <div>
      <swiper :itemList="itemList"></swiper>
    </div>
    <!-- 滑块区域end -->
    <!-- 推荐显示区域 -->
    <div class="show-sec">
      <home-show v-for="(item, index) in showList" :key="index"
      :title="item.title" :content="item.content" :important="item.important"
      :herfText="item.herfText" :imgUrl="item.imgUrl"></home-show>
    </div>
    <div class="show-sec">
      <home-show-m v-for="(item, index) in showListM" :key="index"
      :title="item.title" :content="item.content" :imgUrl="item.imgUrl"></home-show-m>
    </div>
    <!-- 推荐显示区域end -->
    <div class="line"></div>
    <!-- 品质优选 -->
    <rec-title :title="recTitle" :important="recImportant"></rec-title>
    <div class="rec-sec">
      <mise-osusume v-for="(item, index) in susumeList" :key="index"
      :imgUrl="item.imgUrl" :title="item.title" :typeName="item.typeName"
      :typeNum="item.typeNum"></mise-osusume>
    </div>
    <!-- 品质优选end -->
    <div class="line"></div>
    <!-- 推荐商家 -->
    <rec-title :title="recMiseTitle" :important="recMiseImportant"></rec-title>
    <sort-bar></sort-bar>
    <div style="height: 100vh"></div>
    <!-- 推荐商家end -->
    <!-- 购物车小图标 -->
    <shopping-cart :slide = 'slide'></shopping-cart>
    <!-- 购物车小图标end -->
    <eleme-footer class="footer" :selectNum='selectNum'></eleme-footer>
  </div>
</template>

<script>
import elemeFooter from '../components/elemeFooter'
import swiper from '../components/homeSwiper/homeSwiper'
import homeShow from '../components/homeShow'
import homeShowM from '../components/homeShowM'
import recTitle from '../components/recTitle'
import miseOsusume from '../components/miseOsusume'
import shoppingCart from '../components/shoppingCart'
import sortBar from '../components/sortBar/sortBar'

export default {
  name: 'HelloWorld',
  data () {
    return {
      // 头部data
      selectNum: 0,
      locName: '大连东软信息学院',
      wen: '3°',
      weather: '阴天',
      weatherImg: require('../assets/images/homeHeader/whear.svg'),
      inputText: '搜索商家、商品名称',
      fakerInputFixed: false,
      // banner
      bannerImg: require('../assets/images/banner/banner.jpeg'),
      // 滑块数组
      itemList: [
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '我'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '2'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '2'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '娘'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '快'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '给'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '我'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '打'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '钱'
        },
        {
          img: require('../assets/images/swiper/bilibiliH.jpeg'),
          content: '!'
        },
        // 以上为10个
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '我'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '3'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '3'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '娘'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '快'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '给'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '我'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '硬'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '币'
        },
        {
          img: require('../assets/images/swiper/bilibili2.jpeg'),
          content: '!'
        }
      ],
      // 推荐数组
      showList: [
        {
          title: '天天特价',
          content: '好吃实惠 超值美味',
          herfText: '1折起',
          imgUrl: require('../assets/images/swiper/bilibiliH.png'),
          important: true
        },
        {
          title: '营养快餐',
          content: '海量美食任选',
          herfText: '超值go',
          imgUrl: require('../assets/images/swiper/bilibiliH.png'),
          important: false
        }
      ],
      showListM: [
        {
          title: '地方菜系',
          content: '吃出健康',
          imgUrl: require('../assets/images/swiper/bilibili2.png')
        },
        {
          title: '地方菜系',
          content: '吃出健康',
          imgUrl: require('../assets/images/swiper/bilibili2.png')
        },
        {
          title: '地方菜系',
          content: '吃出健康',
          imgUrl: require('../assets/images/swiper/bilibili2.png')
        }
      ],
      // 品质优选
      recTitle: '品质优选',
      recImportant: true,
      susumeList: [
        {
          imgUrl: require('../assets/images/swiper/bilibili2.jpeg'),
          title: '堕落小龙虾',
          typeName: '热销好店',
          typeNum: 1
        },
        {
          imgUrl: require('../assets/images/swiper/bilibiliH.jpeg'),
          title: '堕落小龙虾pro',
          typeName: '大牌精选',
          typeNum: 2
        },
        {
          imgUrl: require('../assets/images/swiper/bilibili2.jpeg'),
          title: '堕落小龙虾',
          typeName: '热销好店',
          typeNum: 1
        },
        {
          imgUrl: require('../assets/images/swiper/bilibiliH.jpeg'),
          title: '堕落小龙虾pro',
          typeName: '大牌精选',
          typeNum: 2
        }
      ],
      // 推荐商家
      recMiseTitle: '推荐商家',
      recMiseImportant: false,
      recMiseList: [
        {

        }
      ],
      // 购物车
      slide: true,
      slideTsu: false,
      timeSet: ''
    }
  },
  mounted () {
    // 滑动屏幕时保证input与header的切换
    let fakerInput = document.getElementById('fakerInput')
    let fakerFather = document.getElementById('header')
    let that = this
    window.onscroll = () => {
      let {y: header} = fakerFather.getBoundingClientRect()
      let {y} = fakerInput.getBoundingClientRect()
      if (y <= 0) {
        that.fakerInputFixed = true
      } else if (header > -55) {
        that.fakerInputFixed = false
      }
    }
  },
  methods: {
    touchmove () {
      this.slide = false
      this.slideTsu = false
    },
    end () {
      let that = this
      this.slideTsu = true
      this.timeSet = setTimeout(() => {
        if (this.slideTsu) {
          that.slide = true
        }
      }, 2000)
    }
  },
  components: {
    elemeFooter,
    swiper,
    homeShow,
    homeShowM,
    recTitle,
    miseOsusume,
    shoppingCart,
    sortBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-body {
  padding-bottom: 4rem;
}

/* 头部css样式 */
.header {
  background-color: #1296db;
  padding: .5rem 0 .1rem;
  height: 5.3rem;
}

.header-mono {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 地址选择区域 */
.location {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  width: 45%;
}

.location span {
  overflow: hidden;
  display: block;
  width: 100%;
  color: #FFF;
}

.location img {
  margin: 0 .5rem;
  width: 15%;
}

.mask {
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to left, rgba(12, 150, 219, 1), rgba(12, 150, 219, 0))
}

.down-j {
  position: absolute;
  right: -20px;
  height: 0;
  width: 0;
  border-width: 6px 5px 0 5px;
  border-style: solid;
  border-color: #fff transparent transparent;
}
/* 选择区域end */

/* 天气显示区域 */
.weather-sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 16%;
  color: #FFF;
  font-size: 12px;
  line-height: 1rem;
}

.weather-sec img {
  width: 55%;
}

.show-w {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
/* 天气显示end */

/* 虚拟搜索框 */
.faker-input-fixed-back {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2.8rem;
  background-color: #1296db;
  z-index: 1997;
}

.faker-input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem .5rem .5rem;
  background-color: #FFF;
}

.faker-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem;
  width: 35%;
  font-size: 12px;
  color: #ccc;
}

.faker-div img {
  width: 10%;
}

.QR-img {
  position: absolute;
  right: 3px;
  width: 1.3rem;
}

.faker-input-fixed {
  position: fixed;
  top: -.5rem;
  right: 0;
  left: 0;
  z-index: 1999;
}
/* 虚拟搜索框end */

/* 头部样式代码end */

/* banner样式 */
.banner-box {
  width: 100vw;
}

.banner-box img {
  width: 100%;
}
/* banner样式end */

/* 推荐区域样式 */
.show-sec {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
/* 推荐区域end */

.line {
  margin: .2rem 0;
  height: .5rem;
  background-color: rgba(0, 0, 0, .01)
}

/* 品质优选 */
.rec-sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .5rem 0;
  padding: 0 .5rem;
}
/* 品质优选 */
</style>
