<template>
  <div>
    <div class="sort-sec" id="sortSec" :class="{'sort-sec-fixed': isSelect || sortBarFixed}">
      <div class="select-box" id="selectBox" @click="change(), changeSelect()">
        <span class="sort-show-text" :class="{'change-color': isSelect}"
        v-text="sortList[sortNum].sortByT"></span>
        <img class="ajirushi" :src="sortImg" alt="" v-if="isSelect === false">
        <img class="ajirushi" :src="sortImgSelect" alt="" v-if="isSelect">
      </div>
      <div class="select-box kyouri-box" @click="sortByKyouriClick(), change()">
        <span class="sort-show-text"
        :class="{'is-kyouri': isSortByKyouri}">
          {{sortByKyouri}}
        </span>
      </div>
      <div class="select-box vip-box" @click="sortVipClick(), change()">
        <img src="../../assets/images/sortBar/king.svg" alt="">
        <span class="sort-show-text"
        :class="{'is-kyouri': isSortByVip}">
          {{sortVip}}
        </span>
      </div>
      <div class="select-box fitter-box" @click="sortFilterClick(), change()">
        <span class="sort-show-text" :class="{'is-fitter': isSortByFilter}">
          {{sortFilter}}
        </span>
        <img v-if="!isSortByFilter"
        src="../../assets/images/sortBar/filter.svg" alt="">
        <img v-if="isSortByFilter"
        src="../../assets/images/sortBar/filter-select.svg" alt="">
      </div>
    </div>
    <div class="sort-list" :class="{'show-sort-list': isSelect}">
      <div v-for="(item, index) in sortList" :key="index"
      class="sort-item" @click="changeNum(index)">
        <span :class="{'change-color': sortNum === index}">
          {{item.sortByT}}
        </span>
        <img src="../../assets/images/sortBar/selected.svg"
        v-if="sortNum === index" alt="">
      </div>
    </div>
    <div class="back-mask" @click="change()" :class="{'show-mask': isSelect}"></div>
  </div>
</template>

<script>
export default {
  props: ['sortBarFixed'],
  data () {
    return {
      sortNum: 0,
      sortImg: require('../../assets/images/sortBar/ajirushi-shita.svg'),
      sortImgSelect: require('../../assets/images/sortBar/ajirushi-ue.svg'),
      isSelect: false,
      sortByKyouri: '距离最近',
      isSortByKyouri: false,
      sortVip: '会员领红包',
      isSortByVip: false,
      sortFilter: '筛选',
      isSortByFilter: false,
      sortList: [
        {
          sortByT: '综合排序'
        },
        {
          sortByT: '好评优先'
        },
        {
          sortByT: '销量最高'
        },
        {
          sortByT: '起送价最低'
        },
        {
          sortByT: '配送最快'
        },
        {
          sortByT: '配送费最低'
        },
        {
          sortByT: '人均由高到低'
        },
        {
          sortByT: '人均由低到高'
        },
        {
          sortByT: '通用排序'
        }
      ]
    }
  },
  methods: {
    // 锚点跳转
    change () {
      let selectBox = document.getElementById('selectBox')
      selectBox.scrollIntoView(true)
    },
    changeSelect () {
      this.isSelect = !this.isSelect
    },
    changeNum (index) {
      this.sortNum = index
      this.isSelect = !this.isSelect
    },
    sortByKyouriClick () {
      this.isSortByKyouri = !this.isSortByKyouri
      this.isSortByFilter = false
    },
    sortVipClick () {
      this.isSortByVip = !this.isSortByVip
      this.isSortByFilter = false
    },
    sortFilterClick () {
      this.isSortByFilter = !this.isSortByFilter
    }
  }
}
</script>

<style scoped>
/* sortBar */
.sort-sec {
  position: relative;
  width: 92%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .35rem 4%;
  background-color: #FFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  z-index: 1000;
}

.sort-sec-fixed {
  position: fixed;
  top: 2.8rem;
}

.select-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  height: 100%;
}

.sort-show-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #666;
}

.kyouri-box {
  width: 17%;
}

.is-kyouri {
  color: #000;
}

.is-fitter {
  color: #1296db;
}

.vip-box {
  width: 26%;
}

.vip-box img {
  width: 20%;
}

.fitter-box {
  width: 12%;
}

.fitter-box img {
  width: 30%;
}

.ajirushi {
  width: 12%;
}
/* sortBar end */

/* sortlist */
.sort-list {
  display: flex;
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 2.5rem;
  padding: .5em 2rem;
  color: #666;
  font-size: 14px;
  background-color: #fff;
  opacity: 0;
  transform: translateY(-10rem);
  z-index: -1;
}

.sort-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sort-item img {
  width: 5%;
}

.show-sort-list {
  transform: translateY(0);
  opacity: 1;
  z-index: 999;
}
/* sortlist end */

.change-color {
  color: #1296db;
}

.back-mask {
  position: fixed;
  bottom: 4rem;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: -998;
}

.show-mask {
  opacity: 1;
  z-index: 998;
}

.show-mask,
.back-mask,
.sort-list,
.show-sort-list {
  transition: all ease-in-out .3s;
}
</style>
