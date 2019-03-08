<template>
  <div class="show-m-sec">
    <span class="show-m-title">{{title}}</span>
    <span class="show-m-content">{{content}}</span>
    <div class="img-box">
      <img :src="imgUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'imgUrl']
}
</script>

<style scoped>
.show-m-sec {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1%;
  margin: 1% 0;
  width: calc(100% / 3 - 1%);
  height: 7.5rem;
  background-color: rgba(0, 0, 0, .015)
}

.img-box {
  margin-top: .3rem;
  width: 60%;
}

.img-box img {
  width: 100%;
}

.show-m-title {
  font-size: 18px;
  font-weight: bold;
  color: #666;;
}

.show-m-content {
  display: block;
  border: .5px solid rgba(0, 0, 0, .4);
  border-radius: 5px;
  padding: .2rem;
  font-size: 12px;
  color: rgba(0, 0, 0, .4);
}
</style>
