<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="ThreeHouse">
    <DyListGroup :groups="groups" :checked="groupChecked" @item-click="itemClick">
      <component v-if="groupChecked" :is="groupChecked.type"></component>
    </DyListGroup>
  </div>
</template>

<script>
  import DyListGroup from '@/components/dy-list-group.vue';
  import LivingRoom from './living-room.vue';

  export default {
    name: 'ThreeHouse',
    components: { DyListGroup, LivingRoom },
    data () {
      return {
        groupChecked: null,
        groups: [
          { title: '客厅', name: 'LivingRoom', type: 'LivingRoom' }
          // { title: '厨房', name: 'Kitchen', type: 'Kitchen' },
          // { title: '阳台', name: 'Balcony', type: 'Balcony' },
          // { title: '主卧', name: 'MasterBedroom', type: 'MasterBedroom' },
          // { title: '次卧1', name: 'SecondBedroom1', type: 'SecondBedroom1' },
          // { title: '次卧2', name: 'SecondBedroom2', type: 'SecondBedroom2' },
          // { title: '次卫', name: 'SecondToilet', type: 'SecondToilet' },
          // { title: '主卫', name: 'MasterToilet', type: 'MasterToilet' }
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
  .ThreeHouse {
    width: 100%;
    height: 100%;
  }
</style>
