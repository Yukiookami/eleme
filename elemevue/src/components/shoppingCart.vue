<template>
  <div class="shopping-box" :class="{'slide-change': slide === false}">
    <img src="../assets/images/shoppingCart/shoppingCart.svg" alt="">
  </div>
</template>

<script>
export default {
  props: ['slide']
}

</script>

<style scoped>
.shopping-box {
  position: fixed;
  bottom: 15vh;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  transform: translateX(0);
  z-index: 10000;
}

.shopping-box img {
  width: 60%;
}

.slide-change {
  opacity: .5;
  transform: translateX(2.2rem);
}

.shopping-box,
.slide-change {
  transition: all ease-in-out .5s;
}
</style>
