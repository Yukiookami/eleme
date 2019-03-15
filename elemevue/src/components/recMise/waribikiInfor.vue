<template>
  <div class="waribiki-box" :class="{'marging-change': isShowMore}">
    <span class="type-name" :class="waribikiTypeClass">
      {{waribikiTypeName}}
    </span>
    <span class="waribiki-text">{{waribiki}}</span>
  </div>
</template>

<script>
export default {
  props: ['waribikiTypeName', 'waribikiTypeClass', 'waribiki', 'isShowMore']
}
</script>

<style scoped>
  .waribiki-box {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: .6rem 0;
    width: 100%;
    height: 1rem;
    font-size: 12px;
    color: #666;
  }

  .waribiki-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .type-name {
    padding: .1rem .2rem;
    border-radius: 5px;
    font-size: 20px;
    transform: scale(.5);
    color: #FFF;
  }

  .marging-change {
    margin: 0 0 .3rem 0;
  }

  .low {
    background-color: rgb(240, 115, 115);
  }

  .fir {
    background-color: rgb(112, 188, 70);
  }

  .vip {
    background-color: rgb(241, 136, 79);
  }

  .lyo {
    background-color: rgb(153, 153, 153);
  }
</style>
