<template>
  <div class="w" style="padding-bottom: 100px;">
    <y-shelf title="XPay收银台 收款方: Exrick">
      <div slot="content">
        <div class="box-inner order-info">
          <p class="payment-detail">扫一扫付款（元）</p>
          <p class="payment-money">{{orderTotal}}</p>
          <div class="img-box">
            <img class="pic" src="http://oweupqzdv.bkt.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81201712111212.png" alt="加载失败" width="168px" height="168px"/>
            <div class="explain">
              <img class="fn-left" src="https://t.alipayobjects.com/images/T1bdtfXfdiXXXXXXXX.png" alt="扫一扫标识">
              <div class="fn-right">打开手机支付宝<br>扫一扫继续付款</div>
            </div>
          </div>
          <a class="download-alipay" href="https://mobile.alipay.com/index.htm" target="_blank">首次使用请下载手机支付宝</a>

          <div class="qrguide-area">
            <img src="https://t.alipayobjects.com/images/rmsweb/T13CpgXf8mXXXXXXXX.png" :class="show?'show-img':'close-img'" @click="changePic()">
            <img src="https://t.alipayobjects.com/images/rmsweb/T1ASFgXdtnXXXXXXXX.png" :class="show?'close-img':'show-img'" @click="changePic()">
          </div>

          <img src="static/images/red.png" width="50px" height="50px" class="red" title="支付领红包" @click="showRed()">
        </div>

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

    <el-dialog
      title="支付红包"
      :visible.sync="dialogVisible"
      width="30%"
      @close="handleClose" style="text-align:center;width:50%;margin:0 auto">
      <img src="http://oweupqzdv.bkt.clouddn.com/1512881761970_small.jpg" class="qr-red"/>
      <span>支付前领个红包吧(每日可领一次)</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">领取了</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import YShelf from '/components/shelf'
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        show: true,
        count: 10,
        userId: '',
        orderTotal: '',
        userName: '',
        tel: '',
        streetName: '',
        checkPrice: '',
        payNow: '等待支付...',
        submit: false,
        nickName: '',
        money: '',
        info: '',
        email: '',
        dialogVisible: true
      }
    },
    computed: {
    },
    methods: {
      changePic () {
        this.show = !this.show
      },
      toMoney (num) {
        num = parseFloat(num)
        num = num.toFixed(2)
        num = num.toLocaleString()
        return num
      },
      handleClose () {
        this.countDown()
      },
      showRed () {
        this.dialogVisible = true
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
    margin: 5px 0 12px 0;
  }

  .pic{
    margin-top: 3px;
  }

  .fn-left{
    margin-left: -5px;
  }

  .fn-right{
    font-size: 13px;
    color: #4D4D4D;
    line-height: 18px;
    margin: -57px 0 0 33px;
  }

  .download-alipay {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: -5px;
    font-size: 12px;
    color: #a6a6a6;
    text-decoration: underline;
    width: 25%;
    margin: 0 auto;
  }

  .qrguide-area {
    position: absolute;
    top: 113px;
    left: 713px;
    width: 204px;
    height: 183px;
    cursor: pointer;
  }

  .show-img{
    display: block;
  }

  .close-img{
    display: none;
  }

  .red {
    position: absolute;
    top: 482px;
    left: 1151px;
    width: 47px;
    height: 50px;
    cursor: pointer;
  }

  .el-dialog--small {
    width: 30%;
  }

  .qr-red {
    display: block;
    margin: 0 auto;
    width: 70%;
  }
</style>
