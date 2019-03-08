<template>
  <div>
    <div>
      <img :src="miseImg" alt="">
    </div>
    <div>
      <span>{{miseName}}</span>
      <!-- 星星✨ -->

      <!-- 星星✨end -->
      <!-- 起送,配送,时间,距离 -->
      <div>
        <div>
          <span>{{startOkane}}</span>
          <span></span>
          <span>{{okuruOkane}}</span>
        </div>
        <div>
          <span>{{time}}</span>
          <span></span>
          <span>{{kyori}}</span>
        </div>
      </div>
      <!-- 配送信息end -->
      <!-- 预定 -->
      <div>
        <span>{{yoteText}}</span>
        <!-- 店铺类型 -->
        <span>{{miseType}}</span>
      </div>
      <!-- 预定end -->
    </div>
    <!-- 各种优惠项目 -->

    <!-- 各种优惠项目end -->
    <!-- 相似店铺 -->
    <div>
      <img src="" alt="">
      <span>{{niauText}}</span>
    </div>
    <!-- 相似店铺end -->
  </div>
</template>

<script>
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
    'waribikiTypeName',
    'waribiki',
    // 会员
    'vipText',
    // 是否有相似店铺
    'niauBo',
    'niauText'
  ],
  data () {
    return {
      vip: '会员'
    }
  }
}
</script>

<style scoped>

</style>
