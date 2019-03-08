<template>
  <div class="show-sec">
      <span class="show-title" :class="{'text-light': important}">{{title}}</span>
      <span>{{content}}</span>
      <span>{{herfText}} ></span>
      <div class="img-box">
        <img :src="imgUrl" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'herfText', 'imgUrl', 'important']
}
</script>

<style scoped>
.show-sec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2%;
  width: 45.5%;
  height: 8.5rem;
  font-size: 14px;
  color: #666;
  background-color: rgba(0, 0, 0, .015);
}

.img-box {
  position: relative;
  right: -46%;
  bottom: 10%;
  width: 50%;
}

.img-box img {
  width: 100%;
}

.show-title {
  font-weight: bold;
  font-size: 20px;
}

.text-light {
  color: rgba(220, 20, 60, .9);
}
</style>
