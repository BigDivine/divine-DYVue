<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.02.04
* Filename      : dy-lottery.vue
* Description   : 抽奖器
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyLottery">
    <div class="header">
      {{ `已抽取${pushCount}次，还剩${totalCount - pushCount}次。花费${moneyTotal}元` }}
    </div>
    <div class="bestInfo">
      {{ `第${bestCount.join(',')}次抽数传说。抽取cf点${cfTickets}w` }}
    </div>
    <div class="bestInfo">
      {{ `可转换祥龙卡${cardTotal}张。获得幸运签${luckyCard}个` }}
    </div>
    <div class="bestInfo">
      <div v-for="(item, i) in cards" :key="i">{{ `${item.name}*${item.total}` }}</div>
    </div>
    <div class="content">
      <div class="wait">
        <div v-for="(item, i) in gift" :key="i">{{ item.name }}</div>
      </div>
      <div class="have">
        <div v-for="(item, i) in totalGifts" :key="i">{{ `${item.name}*${item.total}` }}</div>
      </div>
      <div class="config">
        <div class="btn" @click="addMoney(10)">
          10元
        </div>
        <div class="btn" @click="addMoney(100)">
          100元
        </div>
        <div class="btn" @click="addMoney(1000)">
          1000元
        </div>
        <div class="btn" @click="addMoney(10000)">
          10000元
        </div>
      </div>
    </div>

    <div ref="refAction" class="action">
      <div class="actionItem">整数概率：<i-switch v-model="isInt" /></div>
      <div class="actionItem" @click="reset()">
        <div class="btn">
          重置
        </div>
      </div>
      <div class="actionItem" @click="push(1)">
        <div class="btn">
          抽1次
        </div>
      </div>
      <div class="actionItem" @click="push(10)">
        <div class="btn">
          抽10次
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DyLottery',
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
  mounted() {
    console.log('aaaa');
    let targetUnselect = this.$refs.refAction;
    targetUnselect.addEventListener('selectstart', function(e) {
      e.preventDefault();
    });
  },
  methods: {
    reset() {
      this.totalCount = 0;
      this.moneyTotal = 0;

      this.pushCount = 0;

      this.bestCount = [];

      this.gift = [];
      this.totalGifts = [];
      this.cards = [];
      this.cardTotal = 0;
      this.cfTickets = 0;
    },
    addMoney(money) {
      this.moneyTotal += money;
      if (money === 10) {
        this.totalCount += 1;
      }
      if (money === 100) {
        this.totalCount += 11;
      }
      if (money === 1000) {
        this.totalCount += 110;
      }
      if (money === 10000) {
        this.totalCount += 1100;
      }
    },
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
.DyLottery {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #efefef;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }
  .content {
    flex: 1;
    display: flex;
    border-bottom: 1px solid #efefef;
    overflow: hidden;
    .wait {
      flex: 1;
      border-right: 1px solid #eaeaea;
      overflow: auto;
    }
    .have {
      flex: 1;
      border-left: 1px solid #eaeaea;
      overflow: auto;
    }
    .config {
      flex: 1;
      border-left: 1px solid #eaeaea;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .btn {
        cursor: pointer;
        border: 1px solid #000000;
        border-radius: 8px;
        height: 30px;
        width: 100px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .bestInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }
  .action {
    display: flex;
    height: 40px;
    .actionItem {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        cursor: pointer;
        border: 1px solid #000000;
        border-radius: 8px;
        height: 30px;
        width: 100px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>
