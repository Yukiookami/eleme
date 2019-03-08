<template>
  <div class="mise-box">
    <img class="mise-img" :src="imgUrl" alt="">
    <span class="mise-name">{{title}}</span>
    <span class="type-name"
    :class="{'type-1': typeNum === 1, 'type-2': typeNum === 2}">{{typeName}}</span>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'title', 'typeName', 'typeNum']
}
</script>

<style scoped>
.mise-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  height: 7rem;
  font-size: 12px;
}

.mise-name {
  overflow: hidden;
  display: block;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: rgba(0, 0, 0, .5);
  font-weight: bold;
}

.type-name {
  display: block;
  border-radius: 3px;
  padding: .1rem .2rem;
}

.type-2 {
  border: 1px solid #1296db;
  color: #1296db;
}

.type-1 {
  border: 1px solid rgba(255, 0, 0, .7);
  color: rgba(255, 0, 0, .7);
}

.mise-img {
  width: 70%;
}
</style>
