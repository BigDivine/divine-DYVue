<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.02.08
* Filename      : cf-activity.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="CfActivity">
    <div class="CfActivityContain">
      <div class="buyBtns">
        <div class="buy1Btn"></div>
        <div class="buy10Btn"></div>
        <div class="buy1SaleBtn"></div>
      </div>
      <div class="message">道聚城通用代金券最多抵扣9QB</div>
      <div class="content">
        <div class="info">
          <!-- 我的代金券 -->
          <div>我的代金券:<span>0</span></div>
          <!-- 剩余钥匙 -->
          <div>剩余钥匙:<span>100</span></div>
        </div>

        <!-- 抽1次 -->
        <div class="push1" @click="push(1)"></div>
        <!-- 抽10次 -->
        <div class="push10" @click="push(10)"></div>
      </div>
      <div class="box">
        <div class="boxContain">
          <div class="boxBtn" @click="openBox()"></div>
          <div class="txt">
            <p>抽奖获得的可分解道具进入暂存箱,</p>
            <p>其余道具直接发往游戏内</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CfActivity',
  components: {},
  data() {
    return {
      isInt: false,
      totalCount: 0,
      moneyTotal: 0,
      pushCount: 0,
      bestCount: [],
      gift: [],
      totalGifts: [],
      cards: [],
      cardTotal: 0,
      cfTickets: 0,
      luckyCard: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    push(count) {
      let lastCount = this.totalCount - this.pushCount;
      if ((count === 10 && lastCount < 10) || (count === 1 && !lastCount)) {
        return;
      }
      this.gift = [];
      for (let i = 0; i < count; i++) {
        this.pushCount++;
        let num = Math.random() * 10001;
        if (this.isInt) {
          num = parseInt(Math.random() * 10001);
        }
        let name = '';
        let code = '';
        if (num <= 10) {
          //0.10%
          name = '传说灵眸 无序列号版';
          code = '01';
        } else if (num <= 35) {
          //0.25%
          name = '非觉醒版 王者芳薇';
          code = '02';
        } else if (num <= 60) {
          //0.25%
          name = 'M14EBR-宣武';
          code = '03';
        } else if (num <= 95) {
          //0.35%
          name = '王者潘多拉';
          code = '04';
        } else if (num <= 130) {
          //0.35%
          name = '觉醒版 炼狱-悦蓝';
          code = '05';
        } else if (num <= 180) {
          //0.50%
          name = '裁决-流光秘银皮肤';
          code = '06';
        } else if (num <= 255) {
          //0.75%
          name = 'AN94-超新星';
          code = '07';
        } else if (num <= 355) {
          //1.00%
          name = 'M4A1l-龙血';
          code = '08';
        } else if (num <= 480) {
          //1.25%
          name = '蓝色艾比玩偶（不可交易）';
          code = '09';
        } else if (num <= 630) {
          //1.50%
          name = '猫耳头盔';
          code = '10';
        } else if (num <= 730) {
          //1.00%
          name = '属性抽取券';
          code = '11';
        } else if (num <= 1030) {
          //3.00%
          name = '王者之石*10';
          code = '12';
        } else if (num <= 1180) {
          //1.50%
          name = '新春福星';
          code = '13';
        } else if (num <= 1380) {
          //2.00%
          name = '10000CF点';
          code = '14';
        } else if (num <= 1400) {
          //0.20%
          name = '传说卡';
          code = '15';
        } else if (num <= 1600) {
          //2.00%
          name = '王者卡';
          code = '16';
        } else if (num <= 2600) {
          //10.00%
          name = '英雄卡';
          code = '17';
        } else if (num <= 6300) {
          //37.00%
          name = '道具卡';
          code = '18';
        } else if (num <= 10000) {
          //37.00%
          name = '祥龙卡';
          code = '19';
        }
        if (code === '01') {
          this.bestCount.push(this.pushCount);
        }
        if (code === '14') {
          this.cfTickets += 1;
        }
        if (code === '15') {
          this.cardTotal += 30;
        } else if (code === '16') {
          this.cardTotal += 3;
        } else if (code === '17') {
          this.cardTotal += 2;
        } else if (code === '18' || code === '19') {
          this.cardTotal += 1;
        }
        if (this.cardTotal > 0 && this.cardTotal % 60 === 0) {
          this.luckyCard++;
        }
        this.gift.push({ name, num, code });
        let giftName = this.totalGifts.find((item) => item.code === code);
        if (!giftName) {
          let newGift = { name, code, total: 1 };
          if (['15', '16', '17', '18', '19'].indexOf(code) !== -1) {
            this.cards.push(newGift);
          }
          this.totalGifts.push(newGift);
        } else {
          giftName.total++;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.CfActivity {
  height: 100%;
  width: 100%;
  overflow: auto;
  .CfActivityContain {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .buyBtns {
      width: 1182px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .buy1Btn {
        background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/sp.png) no-repeat;
        background-position: -1px -1217px;
        width: 390px;
        height: 104px;
      }
      .buy10Btn {
        background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/sp.png) no-repeat;
        background-position: -397px -1217px;
        width: 390px;
        height: 104px;
      }
      .buy1SaleBtn {
        background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/sp.png) no-repeat;
        background-position: -792px -1217px;
        width: 390px;
        height: 104px;
      }
    }
    .message {
      width: 390px;
      font-size: 18px;
      color: #7b3907;
      text-align: center;
      line-height: 30px;
      margin-left: 798px;
    }
    .content {
      width: 1211px;
      height: 1012px;
      background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/lotty.png) no-repeat;
      position: relative;
      .info {
        width: 543px;
        position: absolute;
        left: 328px;
        top: 592px;
        font-size: 26px;
        color: #79531e;
        text-align: center;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        span {
          color: #c50000;
        }
      }
      .push1 {
        cursor: pointer;
        width: 327px;
        height: 78px;
        position: absolute;
        left: 252px;
        top: 652px;
      }
      .push10 {
        cursor: pointer;
        width: 327px;
        height: 78px;
        position: absolute;
        left: 626px;
        top: 652px;
      }
    }
    .box {
      background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/rp.jpg) no-repeat;
      background-position: -330px -2397px;
      width: 1200px;
      height: 278px;
      margin: 102px auto 0;
      padding: 25px 0;
      .boxContain {
        background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/boxbg1.png)
          no-repeat;
        width: 1200px;
        height: 228px;
        position: relative;
        padding: 57px 71px 0 635px;
        box-sizing: border-box;
        .boxBtn {
          cursor: pointer;
          background: url(https://game.gtimg.cn/images/actdaoju/act/a20240115gift/sp.png) no-repeat;
          background-position: -466px -1333px;
          width: 212px;
          height: 51px;
          position: absolute;
          left: 306px;
          top: 64px;
        }
        .txt {
          font-size: 16px;
          color: #fffdef;
          text-align: center;
          line-height: 22px;
          width: 280px;
          position: absolute;
          left: 266px;
          top: 128px;
        }
      }
    }
  }
}
</style>
