<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.09.23
* Filename      : dy-circle-swiper.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div
    ref="DyCircleSwiper"
    class="DyCircleSwiper"
    :style="containStyle()">
    <div class="topEarthContain">
      <div class="earth">这是转动的地球</div>
    </div>
    <div class="bottomCircleContain">
      <div class="contain">
        <div class="oneRound">
          <img src="@/assets/images/im_one_round.png" />
        </div>
        <div class="twoRound">
          <img src="@/assets/images/im_two_round.png" />
        </div>
        <div class="threeRound">
          <img src="@/assets/images/im_three_round.png" />
        </div>
      </div>
    </div>
    <div
      ref="DyCircleSwiperContain"
      class="DyCircleSwiperContain">
      <div
        v-for="(item, i) in sortArr"
        :key="i"
        :ref="'DyCircleSwiper' + item.index"
        class="DyCircleSwiperItem"
        :style="itemStyle(item.index)"
        @click="itemClick(item.index)">
        <div>{{ item.index }}</div>
      </div>
    </div>
    <div class="DyCircleSwiperItem1">{{ currentIndex }}</div>
  </div>
</template>

<script>
export default {
  name: 'DyCircleSwiper',
  components: {},
  data() {
    return {
      containW: 0,
      containH: 0,
      minSize: 0,
      scrollDeg: 0,
      currentIndex: 0,
      sortArr: []
    };
  },
  watch: {
    scrollDeg(deg) {
      let rotateRange = 360 / this.sortArr.length;
      let temp1 = parseInt(deg) % parseInt(rotateRange);
      let temp2 = parseInt(deg) / parseInt(rotateRange);
      if (temp1 === 0) {
        if (this.currentIndex !== temp2) {
          this.currentIndex = temp2;
        }
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      let DyCircleSwiper = this.$refs.DyCircleSwiper;
      if (DyCircleSwiper) {
        let containW = DyCircleSwiper.offsetWidth;
        let containH = DyCircleSwiper.offsetHeight;
        this.containW = containW;
        this.containH = containH;
        this.minSize = Math.max(containW, containH) - 80;
        // this.minSize = Math.min(containW, containH);
        this.width = this.minSize;
        this.height = this.minSize;
      }

      let DyCircleSwiperContain = this.$refs.DyCircleSwiperContain;
      DyCircleSwiperContain.style.width = this.minSize + 'px';
      DyCircleSwiperContain.style.height = this.minSize + 'px';
      DyCircleSwiperContain.style.borderRadius = this.minSize / 2 + 'px';
      this.sortArr.push({ index: 1, name: 'current' });
      this.sortArr.push({ index: 2, name: 'other' + 2 });
      this.sortArr.push({ index: 3, name: 'other' + 3 });
      this.sortArr.push({ index: 4, name: 'other' + 4 });
      this.sortArr.push({ index: 5, name: 'other' + 5 });

      // this.start();
    });
  },
  methods: {
    containStyle() {
      let style = {};
      let radius = this.minSize / 2;
      let borderWidth = 5;
      style['--contain-top'] =
        (this.containH - radius * 2 <= 0 ? 0 : this.containH - radius * 2) / 2 - borderWidth + 'px';
      style['--contain-right'] =
        (this.containW - radius * 2 <= 0 ? 0 : this.containW - radius * 2) / 2 - borderWidth + 'px';
      style['--contain-bottom'] =
        (this.containH - radius * 2 <= 0 ? 0 : this.containH - radius * 2) / 2 - borderWidth + 'px';
      style['--contain-left'] =
        (this.containW - radius * 2 <= 0 ? 0 : this.containW - radius * 2) / 2 - borderWidth + 'px';
      style['--contain-radius'] = radius + 'px';
      style['--contain-border-width'] = borderWidth + 'px';
      return style;
    },
    start() {
      if (this.scrollDeg > 360) {
        this.scrollDeg = 0;
      } else {
        this.scrollDeg += 0.1;
      }
      this.scrollDeg = Number(this.scrollDeg.toFixed(1));
      let duration = 36;
      let speed = parseInt((duration * 1000) / (360 / 0.1));
      setTimeout(
        () => {
          this.start();
        },
        this.scrollDeg % 72 === 0 ? 2000 : speed
      );
    },
    itemStyle(index) {
      let style = {};
      let radius = this.minSize / 2;
      if (radius) {
        let rotateRange = 360 / this.sortArr.length;
        let pointDeg = rotateRange * (index - 1) - this.scrollDeg;
        let left = radius * Math.sin((Math.PI * pointDeg) / 180);
        let top = radius * Math.cos((Math.PI * pointDeg) / 180);
        let y = radius + top;

        style['transform'] = `rotateX(-60deg) scale(${y / (radius * 2) + 1.0})`;
        style['translate'] = `${left}px ${top}px`;

        let duration = 36;
        let speed = parseInt(duration / (360 / 0.1));
        style['transation'] = `translate ${speed}s linear`;
      }
      return style;
    },
    itemClick(index) {}
  }
};
</script>
<style lang="scss" scoped>
.DyCircleSwiper {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .topEarthContain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .earth {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #f00;
      font-size: 30px;
      color: #fff;
    }
  }
  .bottomCircleContain {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    .contain {
      position: relative;
      width: 100%;
      height: 100%;
      .oneRound {
        position: absolute;
        bottom: 0;
        left: 10%;
        top: 0;
        right: 10%;
        animation: roundOneGradient 3s linear infinite;
      }
      .twoRound {
        position: absolute;
        bottom: 20%;
        left: 25%;
        top: 0;
        right: 25%;
        animation: roundTwoGradient 3s linear infinite;
      }
      .threeRound {
        position: absolute;
        bottom: 40%;
        left: 30%;
        top: 0;
        right: 30%;
        animation: roundThreeGradient 3s linear infinite;
      }
      img {
        height: 100%;
        width: 100%;
      }
      @keyframes roundOneGradient {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes roundTwoGradient {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes roundThreeGradient {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        40% {
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
  .DyCircleSwiperContain {
    position: relative;
    border-radius: 50%;
    border:5px solid #ccc;
    transform-style: preserve-3d;
    transform: rotateX(70deg)  rotateY(-15deg);
    .DyCircleSwiperItem {
      position: absolute;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      left: calc(50% - 20px);
      top: calc(50% - 20px);
      border-radius: 50%;
      background: $dy-primary-color-rgba;
      color: #fff;
      font-size: 30px;
      transform: rotateX(-70deg);
      transform-origin: 50% 100%;
    }
  }
  // 边框
  .DyCircleSwiperContain::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--contain-radius);
    padding: var(--contain-border-width);
    /* 边框宽度 */
    // background: linear-gradient(180deg, $dy-primary-color-rgba, $dy-primary-color);
    // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    // -webkit-mask-composite: destination-out;
    // mask-composite: exclude;
  }
  .DyCircleSwiperItem1 {
    position: absolute;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: calc(50% - 60px / 2);
    top: calc(50% - 60px / 2);
    border-radius: 50%;
    background: $dy-primary-color-rgba;
    color: #fff;
    font-size: 30px;
  }
}
</style>
