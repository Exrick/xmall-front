<template>
  <div class="w" style="padding-bottom: 100px;">
    <y-shelf title="XPay收银台 收款方: Exrick">
      <div slot="content">
        <div class="box-inner order-info">
          <img class="wechat" src="static/images/weixinpay@2x.png" alt="扫一扫标识">
          <p class="payment-detail">扫一扫付款（元）</p>
          <p class="payment-money">{{orderTotal}}</p>
          <div class="img-box">
            <img class="pic" src="http://oweupqzdv.bkt.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81201712111325.png" alt="加载失败" width="168px" height="168px"/>
          </div>
        </div>
        <img class="explain" src="static/images/wechat-explain.png" alt="扫一扫标识">

        <div>
          <div class="box-btn">
            <div>
              <span>
              
              </span>
              <em><span>¥</span>{{orderTotal}}</em>
              <y-button :text="payNow"
                        :classStyle="submit?'main-btn':'disabled-btn'"
                        style="width: 120px;height: 40px;font-size: 16px;line-height: 38px"
                        @btnClick="paySuc()"
              ></y-button>
            </div>
          </div>
        </div>

      </div>
    </y-shelf>

  </div>
</template>
<script>
  import YShelf from '/components/shelf'
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        show: true,
        num: '',
        userId: '',
        orderTotal: '',
        userName: '',
        count: 20,
        streetName: '',
        checkPrice: '',
        payNow: '等待支付...',
        submit: false,
        nickName: '',
        money: '',
        info: '',
        email: ''
      }
    },
    computed: {
    },
    methods: {
      toMoney (num) {
        num = parseFloat(num)
        num = num.toFixed(2)
        num = num.toLocaleString()
        return num
      },
      countDown () {
        let me = this
        if (this.count === 0) {
          this.payNow = '确认已支付'
          this.submit = true
          this.count = 10
          return
        } else {
          this.count--
        }
        setTimeout(function () {
          me.countDown()
        }, 1000)
      },
      paySuc () {
        this.$router.push({path: '/order/paysuccess', query: {price: this.orderTotal}})
      }
    },
    created () {
      this.orderTotal = this.toMoney(this.$route.query.price)
      if (this.orderTotal === 'NaN') {
        this.$router.push({path: '/'})
      }
      this.countDown()
    },
    components: {
      YShelf,
      YButton
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .w {
    padding-top: 39px;
  }

  .order-info {
    padding: 60px 0 55px;
    color: #333;
    background: #fff !important;
    h3 {
      padding-bottom: 14px;
      line-height: 36px;
      text-align: center;
      font-size: 36px;
      color: #212121;
    }
    .payment-detail {
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      color: #999;
    }
  }

  .box-inner {
    line-height: 60px;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
    }
    em {
      margin-left: 5px;
      font-size: 24px;
      color: #d44d44;
      font-weight: 700;
      margin-right: 20px;
      span {
        margin-right: 4px;
        font-size: 16px;
      }
    }
  }

  .box-btn {
    line-height: 60px;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
    > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
    }
    em {
      margin-left: 5px;
      font-size: 24px;
      color: #d44d44;
      font-weight: 700;
      margin-right: 20px;
      span {
        margin-right: 4px;
        font-size: 16px;
      }
    }
  }

  .payment-money {
    text-align: center;
    font-size: 30px;
    color: #d44d44;
    font-weight: 700;
  }

  .img-box{
    position: relative;
    width: 180px;
    height: auto;
    min-height: 168px;
    margin: 0 auto;
    padding: 6px;
    border: 1px solid #d3d3d3;
    box-shadow: 1px 1px 1px #ccc;
    display: inline-block;
  }

  .explain {
    margin: 0 auto;
    display: flex;
    width: 180px;
    margin-top: -42px;
    margin-bottom: 30px;
  }

  .pic{
    margin-top: 3px;
  }

  .wechat{
    margin: 0 auto;
    display: flex;
    margin-top: -40px;
    width: 220px;
  }

</style>
