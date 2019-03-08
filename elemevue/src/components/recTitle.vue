<template>
  <div class="rec-title-box">
    <div class="line-box">
      <span class="line" :class="{'color-change-back': important}"></span>
      <span class="dot" :class="{'color-change-back': important}"></span>
    </div>
    <span class="rec-title" :class="{'color-change': important}">{{title}}</span>
    <div class="line-box">
      <span class="dot" :class="{'color-change-back': important}"></span>
      <span class="line" :class="{'color-change-back': important}"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'important']
}
</script>

<style scoped>
.rec-title-box {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 35%;
}

.rec-title {
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, .5);
}

.dot,
.line {
  display: block;
  height: .1rem;
  background-color: rgba(0, 0, 0, .3);
}

.line {
  width: 1rem;
}

.dot {
  width: .1rem;
  border-radius: 50%;
}

.line-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
}

.color-change {
  color: #af8260;
}

.color-change-back {
  background-color: #af8260;
}
</style>
