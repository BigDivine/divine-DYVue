<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.10.18
* Filename      : dy-star-bling.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyStarBling">
    <!-- <div class="message">this is a star bling demo</div> -->
    <div
      v-for="i in starNum"
      :key="i"
      class="star"
      :style="getStarSize(i)"></div>
  </div>
</template>

<script>
export default {
  name: 'DyStarBling',
  components: {},
  props: {
    starNum: { type: Number, default: 30 }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    getStarSize(i) {
      let style = { position: 'absolute' };
      //星星的最大尺寸是30*30
      let size = Math.random() * 40;
      style['width'] = size + 'px';
      style['height'] = size + 'px';

      //星星的初始位置是屏幕的0,0处
      let top = Math.random() * 100;
      let left = Math.random() * 100;
      while (top > 90 || left > 90) {
        if (top > 90) {
          top = Math.random() * 100;
        }
        if (left > 90) {
          left = Math.random() * 100;
        }
      }
      style['top'] = top + '%';
      style['left'] = left + '%';
      //星星的动画持续时间3s
      let delay = Math.random() * 3 + 's';
      style['animationDelay'] = delay;
      return style;
    }
  }
};
</script>
<style lang="scss" scoped>
.DyStarBling {
  position: relative;
  height: 100%;
  width: 100%;
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: #fff;
  }

  .star {
    width: 40px;
    height: 40px;
    background-color: #ff0;
    box-shadow: #fff 0 0 10px;
    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
    animation: star-bling 3s ease infinite;
  }
  @keyframes star-bling {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
}
</style>
