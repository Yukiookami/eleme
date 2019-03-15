<template>
  <div class="mise-sec">
    <div class="mise-img-box">
      <img :src="miseImg" alt="">
    </div>
    <div class="text-sec">
      <span class="mise-name">{{miseName}}</span>
      <!-- 星星✨ -->
      <mise-star-com :point='point' :sellNum='sellNum'></mise-star-com>
      <!-- 星星✨end -->
      <!-- 起送,配送,时间,距离 -->
      <div class="info-sec">
        <div>
          <span>{{startOkane}}</span>
          <span class="line">|</span>
          <span>{{okuruOkane}}</span>
        </div>
        <div class="color-low">
          <span>{{time}}</span>
          <span class="line">|</span>
          <span>{{kyori}}</span>
        </div>
      </div>
      <!-- 配送信息end -->
      <!-- 预定 -->
      <div class="mise-type-sec">
        <span>{{yoteText}}</span>
        <!-- 店铺类型 -->
        <span class="mise-type">{{miseType}}</span>
      </div>
      <!-- 预定end -->
      <!-- 各种优惠项目 -->
      <div class="waribiki-main">
        <div class="waribiki-sec" :class="{'waribiki-sec-show': isShowMore}">
          <waribiki-infor v-for="(item, index) in waribikiList"
          :key="index" :waribikiTypeName='item.waribikiTypeName'
          :waribikiTypeClass='item.waribikiTypeClass'
          :waribiki='item.waribiki' :isShowMore='isShowMore'></waribiki-infor>
        </div>
        <div @click="showMore()" class="waribiki-more"
        v-if="waribikiList.length > 2">
          <span>{{waribikiList.length}}个活动</span>
          <span class="waribiki-show"
          :class="{'waribiki-showMore': isShowMore}"></span>
        </div>
      </div>
      <!-- 各种优惠项目end -->
      <!-- 相似店铺 -->
      <div>
        <img src="" alt="">
        <span>{{niauText}}</span>
      </div>
      <!-- 相似店铺end -->
    </div>
  </div>
</template>

<script>
import miseStarCom from './miseStar'
import waribikiInfor from './waribikiInfor'

export default {
  props: [
    // 封面
    'miseImg',
    // 店名
    'miseName',
    // 配送信息
    'startOkane',
    'okuruOkane',
    'time',
    'kyori',
    // 星星✨
    'star',
    'point',
    'sellNum',
    // 店铺类型与预定
    'yote',
    'yoteText',
    'miseType',
    // 满减
    'waribikiList',
    // 是否有相似店铺
    'niauBo',
    'niauText'
  ],
  data () {
    return {
      vip: '会员',
      isShowMore: false
    }
  },
  methods: {
    showMore () {
      this.isShowMore = !this.isShowMore
    }
  },
  components: {
    miseStarCom,
    waribikiInfor
  }
}
</script>

<style scoped>
  .mise-sec {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4%;
    border-top: rgba(0, 0, 0, .05) 1px solid;
  }

  .mise-img-box {
    width: 20%
  }

  .mise-img-box img {
    border: 1px solid #ccc;
    width: 100%;
  }

  .text-sec {
    width: 72%
  }

  .mise-name {
    overflow: hidden;
    display: block;
    color: #000;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .info-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: #666;
  }

  .color-low {
    color: rgb(155, 155, 155);
  }

  .line {
    color: rgba(0, 0, 0, .3)
  }

  .mise-type-sec {
    margin: .3rem 0 .5rem;
  }

  .mise-type {
    padding: .1rem .2rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    color: #666;
    font-size: 10px;
  }

  .waribiki-sec {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 2.4rem;
    width: 77%;
  }

  .waribiki-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.2rem;
    padding-top: .5rem;
    border-top: 1px solid rgba(0, 0, 0, .05);
    font-size: 10px;
    color: #666;
  }

  .waribiki-more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 23%;
  }

  .waribiki-show {
    height: 0;
    width: 0;
    border-width: 4px 3px 0 3px;
    border-style: solid;
    transition: all .3s ease-in-out;
    border-color: #999 transparent transparent transparent;
  }

  .waribiki-showMore {
    transform: rotate(180deg);
  }

  .waribiki-sec-show {
    height: auto;
  }
</style>
