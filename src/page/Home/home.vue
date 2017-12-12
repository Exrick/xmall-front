<template>
  <div class="home">
    <div class="banner">
      <a href="https://github.com/Exrick/xmall">
        <div class="bg" ref="bg"
            @mouseover="bgOver($refs.bg)"
            @mousemove="bgMove($refs.bg,$event)"
            @mouseout="bgOut($refs.bg)">
          <span class="img a"></span>
          <span class="text b">以傲慢与偏执<br/>回敬傲慢与偏见</span>
          <span class="copyright c">code by qingjin.me | picture from t.tt</span>
        </div>
      </a>
    </div>

    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <y-shelf title="热门商品">
          <div slot="content" class="hot">
            <mall-goods :msg="item" v-for="(item,i) in hot" :key="i"></mall-goods>
          </div>
        </y-shelf>
      </section>
      <section class="w mt30 clearfix" v-for="(item,i) in floors" :key="i">
        <y-shelf :title="item.title">
          <div slot="content" class="floors">
            <div class="imgbanner">
              <a v-bind:href="floors[i].image.link"><img v-lazy="floors[i].image.image" :alt="item.title"></a>
            </div>
            <mall-goods :msg="tab" v-for="(tab,i) in item.tabs" :key="i"></mall-goods>
          </div>
        </y-shelf>
      </section>
    </div>

    <el-dialog
      title="通知"
      :visible.sync="dialogVisible"
      width="30%"
      style="width:70%;margin:0 auto">
      <span>XPay个人支付收款系统已上线，赶快去支付体验吧！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {productHome} from '/api/index.js'
  import YShelf from '/components/shelf'
  import product from '/components/product'
  import mallGoods from '/components/mallGoods'
  import { setStore, getStore } from '/utils/storage.js'
  export default {
    data () {
      return {
        banner: {},
        bgOpt: {
          px: 0,
          py: 0,
          w: 0,
          h: 0
        },
        floors: [],
        hot: [],
        loading: true,
        notify: '1',
        dialogVisible: false
      }
    },
    methods: {
      bgOver (e) {
        this.bgOpt.px = e.offsetLeft
        this.bgOpt.py = e.offsetTop
        this.bgOpt.w = e.offsetWidth
        this.bgOpt.h = e.offsetHeight
      },
      bgMove (dom, eve) {
        let bgOpt = this.bgOpt
        let X, Y
        let mouseX = eve.pageX - bgOpt.px
        let mouseY = eve.pageY - bgOpt.py
        if (mouseX > bgOpt.w / 2) {
          X = mouseX - (bgOpt.w / 2)
        } else {
          X = mouseX - (bgOpt.w / 2)
        }
        if (mouseY > bgOpt.h / 2) {
          Y = bgOpt.h / 2 - mouseY
        } else {
          Y = bgOpt.h / 2 - mouseY
        }
        dom.style['-webkit-transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
        dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      },
      bgOut (dom) {
        dom.style['-webkit-transform'] = 'rotateY(0deg) rotateX(0deg)'
        dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
      },
      showNotify () {
        var value = getStore('notify')
        if (this.notify !== value) {
          this.dialogVisible = true
          setStore('notify', this.notify)
        } 
      }
    },
    mounted () {
      productHome().then(res => {
        let data = res.result
        this.floors = data.home_floors
        this.hot = data.home_hot
        this.loading = false
      })
      this.showNotify()
    },
    components: {
      YShelf,
      product,
      mallGoods
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
  }

  .banner, .banner span, .banner div {
    font-family: "Microsoft YaHei";
    transition: all .3s;
    -webkit-transition: all .3s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
  }

  .banner {
    perspective: 3000px;
    position: relative;
    z-index: 19;
  }

  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-1_61bdc2f4f9.png") center no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
    -webkit-transform: rotateY(0deg) rotateX(0deg);
  }

  .img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-3_8fa7866d59.png") center no-repeat;
    background-size: 95% 100%;
  }

  .text {
    position: absolute;
    top: 20%;
    right: 10%;
    font-size: 30px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .copyright {
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 10px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .a {
    -webkit-transform: translateZ(40px);
  }

  .b {
    -webkit-transform: translateZ(20px);
  }

  .c {
    -webkit-transform: translateZ(0px);
  }

  .sk_item {
    width: 170px;
    height: 225px;
    padding: 0 14px 0 15px;
    > div {
      width: 100%;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      &:hover {
        transform: translateY(-5px);
      }
    }
    img {
      width: 130px;
      height: 130px;
      margin: 17px 0;
    }
    .sk_item_name {
      color: #999;
      display: block;
      max-width: 100%;
      _width: 100%;
      overflow: hidden;
      font-size: 12px;
      text-align: left;
      height: 32px;
      line-height: 16px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .sk_item_price {
      padding: 3px 0;
      height: 25px;
    }
    .price_new {
      font-size: 18px;
      font-weight: 700;
      margin-right: 8px;
      color: #f10214;
    }
    .price_origin {
      color: #999;
      font-size: 12px;
    }
  }

  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 29px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);

  }

  ul.box {
    display: flex;
    li {
      flex: 1;
      img {
        display: block;
        width: 305px;
        height: 200px;
      }
    }
  }

  .mt30 {
    margin-top: 30px;
  }

  .hot {
    display: flex;
    > div {
      flex: 1;
      width: 25%;
    }
  }

  .floors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .imgbanner {
      width: 50%;
      height: 430px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }


</style>
