<template>
  <div class="icon-item">
    <img :src="img" alt="">
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
  props: ['img', 'content']
}
</script>

<style scoped>
.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: .25rem 2.5%;
  width: 15%;
  font-size: 12px;
  color: #999;
}

.icon-item img {
  width: 100%;
  margin-bottom: .3rem;
  border-radius: 50%;
}
</style>
