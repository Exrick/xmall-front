<template>
  <div class="goods">
      
    <div class="nav-sub">
      <div class="nav-sub-bg"></div>
      <div class="nav-sub-wrapper">
        <div class="w">
          <ul class="nav-list2">
            <li>
              <a class="active">搜索结果</a>
            </li>
            <li>
              <a>共为您找到 10 款商品信息</a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>

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

    
    <div class="img-item" v-if="productMsg">
      <!--商品-->
      <div class="goods-box w">
        <mall-goods v-for="(item,i) in computer" :key="i" :msg="item"></mall-goods>
      </div>
      <div v-show="!busy" class="w" style="text-align: center;background: #fff" v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        正在加载中...
      </div>
    </div>
    <div class="no-info" v-else>
      <div class="no-data">
        <img src="/static/images/no-search.png">
        <br> 抱歉！没有为您找到相关的商品
      </div>
      <section class="section">
        <y-shelf title="为您推荐">
          <div slot="content" class="recommend">
            <mall-goods :msg="item" v-for="(item,i) in recommend" :key="i"></mall-goods>
          </div>
        </y-shelf>
      </section>
    </div>

  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  import YButton from '/components/YButton'
  import {productHome} from '/api/index.js'
  import YShelf from '/components/shelf'
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
        },
        recommend: []
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
      productHome().then(res => {
        let data = res.result
        this.recommend = data.home_hot
      })
    },
    components: {
      mallGoods,
      YButton,
      YShelf
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

  .nav-sub {
    position: relative;
    margin-top: -40px;
    z-index: 20;
    height: 90px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
    &.fixed {
      position: fixed;
      z-index: 21;
      height: 60px;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #dadada;
      background-image: -webkit-linear-gradient(#fff, #f1f1f1);
      background-image: linear-gradient(#fff, #f1f1f1);
    }
    .nav-sub-wrapper {
      padding: 31px 0;
      height: 90px;
      position: relative;
      &.fixed {
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }
      &:after {
        content: " ";
        position: absolute;
        top: 89px;
        left: 50%;
        margin-left: -610px;
        width: 1220px;
        background: #000;
        height: 1px;
        display: none;
        opacity: 0;
        -webkit-transition: opacity .3s ease-in;
        transition: opacity .3s ease-in;
      }
    }
    .w {
      display: flex;
      justify-content: space-between;
    }
    .nav-list2 {
      height: 28px;
      line-height: 28px;
      display: flex;
      align-items: center;
      height: 100%;
      li:first-child {
        padding-left: 0;
        a {
          padding-left: 10px;
        }
      }
      li {
        position: relative;
        float: left;
        padding-left: 2px;
        a {
          display: block;
          cursor: default;
          padding: 0 10px;
          color: #666;
          &.active {
            font-weight: bold;
          }
        }
        // a:hover {
        //   color: #5683EA;
        // }
      }
      li:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 13px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
    }
  }

  .no-info {
    padding: 100px 0;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    .no-data{
      align-self: center;
    }
  }

  .section {
    padding-top: 8vw;
    margin-bottom: -5vw;
    width: 1218px;
    align-self: center;
  }

  @media (min-width: 1px) {
    .nav-sub .nav-sub-wrapper:after {
      display: block;
    }
  }

  .recommend {
    display: flex;
    > div {
      flex: 1;
      width: 25%;
    }
  }


</style>
