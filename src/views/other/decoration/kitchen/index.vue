<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Kitchen">
    <DyListGroup :groups="groups" :checked="groupChecked" @item-click="itemClick">
      <component v-if="groupChecked" :is="groupChecked.type"></component>
    </DyListGroup>
  </div>
</template>

<script>
  import DyListGroup from '@/components/dy-list-group.vue';
  import LeftLayout from './left-layout.vue';
  import CenterLayout from './center-layout.vue';
  import RightLayout from './right-layout.vue';

  export default {
    name: 'Kitchen',
    components: { DyListGroup, LeftLayout, CenterLayout, RightLayout },
    data () {
      return {
        groupChecked: null,
        groups: [
          { title: '西墙', name: 'left', type: 'left-layout' },
          { title: '北墙', name: 'center', type: 'center-layout' },
          { title: '东墙', name: 'right', type: 'right-layout' }
        ]
      };
    },
    created () {
      this.groupChecked = this.groups[0];
    },
    mounted () {},
    methods: {
      itemClick (item) {
        this.groupChecked = item;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .Kitchen {
    width: 100%;
    height: 100%;
  }
</style>
