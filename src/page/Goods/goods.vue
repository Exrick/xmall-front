<template>
  <div class="goods">
    <div class="nav">

      <div class="w">
        <a href="javascript:;" :class="{active:sortType===1}" @click="reset()">综合排序</a>
        <a href="javascript:;" @click="sort(1)" :class="{active:sortType===2}">价格从低到高</a>
        <a href="javascript:;" @click="sort(-1)" :class="{active:sortType===3}">价格从高到低</a>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min">
          <span style="margin: 0 5px"> - </span>
          <input type="number" placeholder="价格" v-model="max">
          <y-button text="确定" classStyle="main-btn" @btnClick="reset" style="margin-left: 10px;"></y-button>
        </div>
      </div>
    </div>

    <!--商品-->
    <div class="goods-box w">
      <mall-goods v-for="(item,i) in computer" :key="i" :msg="item"></mall-goods>
    </div>
    <div v-show="!busy" class="w" style="text-align: center;background: #fff" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      正在加载中...
    </div>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        computer: [],
        min: '',
        max: '',
        busy: false,
        timer: null,
        sortType: 1,
        windowHeight: null,
        windowWidth: null,
        params: {
          page: 1,
          sort: ''
        }
      }
    },
    methods: {
      _getComputer (flag) {
        let params = {
          params: {
            page: this.params.page,
            sort: this.params.sort,
            priceGt: this.min,
            priceLte: this.max
          }
        }
        getComputer(params).then(res => {
          if (res.result.count) {
            let data = res.result.data
            if (flag) {
              this.computer = this.computer.concat(data)
            } else {
              this.computer = data
            }
          } else {
            clearTimeout(this.timer)
            this.busy = true
          }
        })
      },
      // 默认排序
      reset () {
        this.sortType = 1
        this.params.sort = ''
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      // 价格排序
      sort (v) {
        v === 1 ? this.sortType = 2 : this.sortType = 3
        this.params.sort = v
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      // 加载更多
      loadMore () {
        this.busy = true
        this.timer = setTimeout(() => {
          this.params.page++
          this._getComputer(true)
          this.busy = false
        }, 500)
      }
    },
    created () {
      this._getComputer()
    },
    mounted () {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
    components: {
      mallGoods,
      YButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

  .nav {
    height: 60px;
    line-height: 60px;
    > div {
      display: flex;
      align-items: center;
      a {
        padding: 0 15px;
        height: 100%;
        @extend %block-center;
        font-size: 12px;
        color: #999;
        &.active {
          color: #5683EA;
        }
        &:hover {
          color: #5683EA;
        }
      }
      input {
        @include wh(80px, 30px);
        border: 1px solid #ccc;
      }
      input + input {
        margin-left: 10px;
      }
    }
    .price-interval {
      padding: 0 15px;
      @extend %block-center;
      input[type=number] {
        border: 1px solid #ccc;
        text-align: center;
        background: none;
        border-radius: 5px;
      }
    }
  }

  .goods-box {
    > div {
      float: left;
      border: 1px solid #efefef;
    }
  }


</style>
