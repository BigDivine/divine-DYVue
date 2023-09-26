<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="OneHouse">
    <DyListGroup :groups="groups" :checked="groupChecked" @item-click="itemClick">
      <component v-if="groupChecked" :is="groupChecked.type"></component>
    </DyListGroup>
  </div>
</template>

<script>
  import DyListGroup from '@/components/dy-list-group.vue';
  import SourceLayout from './source-layout.vue';

  import SchemeOneLayout from './scheme-one-layout.vue';
  import SchemeTwoLayout from './scheme-two-layout.vue';
  export default {
    name: 'OneHouse',
    components: { DyListGroup, SourceLayout, SchemeOneLayout, SchemeTwoLayout },
    data () {
      return {
        groupChecked: null,
        groups: [
          { title: '原始布局', name: 'layout', type: 'source-layout' },
          { title: '布局一', name: 'layout1', type: 'scheme-one-layout' },
          { title: '布局二', name: 'layout2', type: 'scheme-two-layout' }
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
  .OneHouse {
    width: 100%;
    height: 100%;
  }
</style>
