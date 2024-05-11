<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.03.21
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Index">
    <div style="width:200px; overflow:hidden;float:left;">
      <div>主卧衣柜(1900*2600)</div>
      <div style="background: #999;height:260px;width:190px;display:flex;">
        <div style="width:40px;height:260px;background: #333;">
          <div style="height:50px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:110px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:30px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:18px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:52px;width:100%;"></div>
        </div>
        <div style="width:40px;height:260px;background: #333;border-left:1px solid #cccccc;">
          <div style="height:50px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:210px;width:100%;"></div>
        </div>
        <div style="width:40px;height:260px;background: #333;border-left:1px solid #cccccc;">
          <div style="height:50px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:210px;width:100%;"></div>
        </div>
        <div style="width:40px;height:260px;background: #333;border-left:1px solid #cccccc;">
          <div style="height:50px;width:100%;border-bottom:1px solid #cccccc;"></div>
          <div style="height:210px;width:100%;"></div>
        </div>
        <div style="width:30px;height:260px;background: #333;border-left:1px solid #cccccc;"></div>
      </div>
    </div>
    <div style="width:220px; overflow:hidden;float:left;">
      <div>酒柜(1000*2500)</div>
      <div style="background: #999;height:500px;width:200px; ">
        <div style="background: #999;height:200px;width:200px; ">
          <div
            style="background: #999;height:60px;width:33.3333333%;border-bottom:1px solid #cccccc;border-right:1px solid #cccccc;float:left;"
            v-for="i in 3"
            :key="i"
          ></div>
          <div
            style="background: #999;height:70px;width:33.3333333%;border-bottom:1px solid #cccccc;border-right:1px solid #cccccc;float:left;"
            v-for="i in 3"
            :key="i"
          ></div>
          <div
            style="background: #999;height:70px;width:33.3333333%;border-bottom:1px solid #cccccc;border-right:1px solid #cccccc;float:left;"
            v-for="i in 3"
            :key="i"
          ></div>
        </div>
        <div
          style="background: #999;height:100px;width:200px;border-bottom:1px solid #cccccc;display:flex;"
        ></div>
        <div style="background: #999;height:200px;width:200px;display:flex;">
          <div
            style="background: #999;height:200px;width:33.3333333%;border-right:1px solid #cccccc;float:left;"
            v-for="i in 3"
            :key="i"
          ></div>
        </div>
      </div>
    </div>
    <div style="width:220px; overflow:hidden;float:left;">
      <div>酒柜(1000*2600)</div>
      <div style="background: #999;height:500px;width:200px; ">
        <!-- <div
          style="float:left;background: #999;height:500px;width:70px;border-right:1px solid #cccccc;display:flex;flex-direction:column;"
        >
          <div style="height:200px;width:100%;border-bottom:1px solid #cccccc;display:flex;flex-direction:column;">
            <div
              style="background: #999;width:100%;flex:1;border-bottom:1px solid #cccccc;float:left;"
              v-for="i in 3"
              :key="i"
            ></div>
          </div>
          <div style="flex:1;width:100%;border-bottom:1px solid #cccccc;"></div>
        </div>
        <div
          style="float:left;background: #999;height:500px;width:70px;border-right:1px solid #cccccc;display:flex;flex-direction:column;"
        >
          <div style="height:200px;width:100%;border-bottom:1px solid #cccccc;display:flex;flex-direction:column;">
            <div
              style="background: #999;width:100%;flex:1;border-bottom:1px solid #cccccc;float:left;"
              v-for="i in 3"
              :key="i"
            ></div>
          </div>
          <div style="flex:1;width:100%;border-bottom:1px solid #cccccc;"></div>
        </div> -->
        <div style="height:500px;width:140px;float:left;background: #999;">
          <div
            style="height:200px;width:140px;background: #999;border-bottom:1px solid #cccccc;border-right:1px solid #cccccc;"
          >
            <div
              style="height:200px;width:100%;border-bottom:1px solid #cccccc;display:flex;flex-direction:column;"
            >
              <div
                style="background: #999;width:100%;flex:1;border-bottom:1px solid #cccccc;float:left;"
                v-for="i in 3"
                :key="i"
              >
                <div
                  style="background: #999;width:50%; height:100%;border-right:1px solid #cccccc;"
                ></div>
              </div>
            </div>
          </div>
          <div
            style="height:300px;width:140px;background: #999;border-right:1px solid #cccccc;display:flex;flex-direction:column;justify-content:space-between;"
          >
            <div
              style="background: #999;width:100%;height:25%;border-bottom:1px solid #cccccc;;"
            ></div>
            <div
              style="background: #999;width:100%;height:25%;border-top:1px solid #cccccc;"
            ></div>
          </div>
        </div>

        <div
          style="float:left;background: #999;height:500px;width:60px;display:flex;flex-direction:column;"
        >
          <div
            v-for="i in 6"
            :key="i"
            style="flex:1;width:100%;border-bottom:1px solid #cccccc;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.Index {
  padding: 10px;
}
</style>
