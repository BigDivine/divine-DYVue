<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : living-room.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="living-room">
    <div class="LRMasterWall">
      <div class="shoeCabinet">鞋柜（110*200）</div>
      <div class="door">门口（100*200）</div>
      <div class="sofa">沙发（300*100）</div>
      <div class="monitor">监视器</div>
      <div class="eletricBox">强电箱</div>
      <div class="doorSwitch"></div>
      <div class="sofaSwitch"></div>
      <div class="socket1"></div>
      <div class="socket2"></div>
      <div class="socket3"></div>
      <div class="socket4"></div>
      <div class="socket5"></div>
      <div class="socket6"></div>
      <div class="socket7"></div>
      <div class="socket8"></div>
      <div class="socket9"></div>
    </div>
    <div class="LRSecondWall">
      <div class="LRIceBoxWall">
        <div class="iceBox">冰箱（90*180）</div>
        <div class="wineBox">餐柜（110*200）</div>
        <div class="socket1"></div>
        <div class="socket2"></div>
        <div class="socket3"></div>
      </div>
      <div class="LRNullWall">
        <div class="socket1"></div>
        <div class="socket2"></div>
      </div>
      <div class="LRTVWall">
        <div class="tvBox">电视柜（180*40）</div>
        <div class="socket1"></div>
        <div class="socket2"></div>
        <div class="socket3"></div>
        <div class="socket4"></div>
        <div class="socket5"></div>
        <div class="socket6"></div>
        <div class="socket7"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'living-room'
  };
</script>
<style lang="scss" scoped>
  .living-room {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #efefef 1px, transparent 1px),
      linear-gradient(to bottom, #efefef 1px, transparent 1px);
    background-repeat: repeat; /* 默认为 repeat */
    background-size: 80px 80px;
    .LRMasterWall {
      position: relative;
      margin-left: 80px;
      width: 1000px;
      height: 240px;
      border: 1px solid #000;
      .shoeCabinet {
        //鞋柜
        position: absolute;
        left: 0;
        bottom: 0;
        height: 200px;
        width: 110px;
        background: #efefef;
        line-height: 200px;
        text-align: center;
      }
      .door {
        //门口
        position: absolute;
        left: 110px;
        bottom: 0;
        height: 200px;
        width: 110px;
        background: #ccc;
        line-height: 200px;
        text-align: center;
      }
      .sofa {
        //沙发
        position: absolute;
        right: 20px;
        bottom: 0;
        height: 100px;
        width: 300px;
        background: #efefef;
        line-height: 100px;
        text-align: center;
      }
      .monitor {
        position: absolute;
        left: 250px;
        bottom: 130px;
        height: 15px;
        width: 20px;
        background: #f0f;
        line-height: 15px;
        text-align: center;
      }
      .eletricBox {
        position: absolute;
        left: 260px;
        bottom: 200px;
        height: 20px;
        width: 40px;
        background: #f0f;
        line-height: 20px;
        text-align: center;
      }
      .doorSwitch {
        //门口开关
        position: absolute;
        left: 230px;
        bottom: 130px;
        height: 10px;
        width: 10px;
        background: #0ff;
      }
      .sofaSwitch {
        //沙发开关
        position: absolute;
        right: 325px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #0ff;
      }
      .socket1 {
        // 鞋柜里的插座
        position: absolute;
        left: 60px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket2 {
        // 鞋柜里的插座
        position: absolute;
        left: 75px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket3 {
        // 阳台那边沙发上的插座
        position: absolute;
        right: 20px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket4 {
        // 沙发上的插座
        position: absolute;
        right: 310px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket5 {
        // 沙发上的插座
        position: absolute;
        right: 298px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket6 {
        // 沙发下的插座
        position: absolute;
        right: 350px;
        bottom: 20px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket7 {
        // 沙发下的插座
        position: absolute;
        right: 362px;
        bottom: 20px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket8 {
        // 未来柜子上的插座
        position: absolute;
        left: 450px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket9 {
        // 未来柜子上的插座
        position: absolute;
        left: 462px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
    }
    .LRSecondWall {
      display: flex;
      margin-top: 80px;
      margin-left: 80px;
      width: 1000px;
      height: 240px;
      .LRIceBoxWall {
        position: relative;
        width: 200px;
        height: 240px;
        border: 1px solid #000;
        .iceBox {
          // 冰箱
          position: absolute;
          left: 0;
          bottom: 0;
          height: 180px;
          width: 90px;
          background: #ccc;
          text-align: center;
        }
        .wineBox {
          // 酒柜
          position: absolute;
          left: 93px;
          bottom: 0;
          height: 200px;
          width: 105px;
          background: #efefef;
          text-align: center;
        }
        .socket1 {
          // 冰箱插座
          position: absolute;
          left: 60px;
          bottom: 20px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket2 {
          // 酒柜里的插座
          position: absolute;
          right: 20px;
          bottom: 110px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket3 {
          // 酒柜里的插座
          position: absolute;
          right: 32px;
          bottom: 110px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
      }
      .LRNullWall {
        position: relative;
        margin-left: 40px;
        width: 270px;
        height: 240px;
        border: 1px solid #000;
        .socket1 {
          // 预留插座
          position: absolute;
          left: 60px;
          bottom: 20px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket2 {
          // 预留插座
          position: absolute;
          left: 72px;
          bottom: 20px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
      }
      .LRTVWall {
        position: relative;
        margin-left: 50px;
        width: 320px;
        height: 240px;
        border: 1px solid #000;
        .tvBox {
          // 电视柜
          position: absolute;
          left: 70px;
          bottom: 20px;
          height: 40px;
          width: 180px;
          background: #efefef;
          text-align: center;
        }
        .socket1 {
          // 预留插座
          position: absolute;
          left: 130px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket2 {
          // 预留插座
          position: absolute;
          left: 140px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #0f0;
        }
        .socket3 {
          // 预留插座
          position: absolute;
          left: 150px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket4 {
          // 预留插座
          position: absolute;
          left: 160px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #0f0;
        }
        .socket5 {
          // 预留插座
          position: absolute;
          left: 170px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
        .socket6 {
          // 预留插座
          position: absolute;
          left: 180px;
          bottom: 30px;
          height: 10px;
          width: 10px;
          background: #0f0;
        }
        .socket7 {
          // 空调插座
          position: absolute;
          right: 30px;
          bottom: 20px;
          height: 10px;
          width: 10px;
          background: #00f;
        }
      }
    }
  }
</style>
