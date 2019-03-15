<template>
  <div class="star-box">
    <progress class="star-pro star-sec" :value="point" max="5"></progress>
    <span class="point-text">{{point}}</span>
    <span>月售{{sellNum}}单</span>
  </div>
</template>

<script>
export default {
  props: ['point', 'sellNum']
}
</script>

<style scoped>
.star-sec {
  mask-image: url('../../assets/images/mise/star.png')
}

.star-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: .7rem 0;
  font-size: 10px;
  color: #666;
}

.point-text {
  display: block;
  margin: 0 .6rem;
}

.star-pro {
  height: .76rem;
  width: 4.1rem;
  border-radius: 0.1rem;
}
/* 表示总长度背景色 */
.star-pro::-webkit-progress-bar {
  background-color: rgba(0, 0, 0, .1);
  border-radius: 0.2rem;
}
/* 表示已完成进度背景色 */
.star-pro::-webkit-progress-value {
  background: #FC3;
  border-radius: 0.2rem;
}
</style>
