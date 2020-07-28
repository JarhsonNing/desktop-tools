<template>
  <div class="item">
    <!-- <md-checkbox v-model="item.completed" class="checkbox-color"></md-checkbox> -->
    <md-switch class="completed-menu" v-model="item.completed"></md-switch>
    <div class="item-content">
      <div class="item-title" @dblclick="dblclick">{{item.title}}</div>
      <div v-if="item.remark" class="item-remarks">{{item.remark}}</div>
      <div v-if="item.time" class="item-time">
        <md-datepicker v-model="item.time"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        item:Object
    },
    methods:{
        dblclick() {
            console.log('dbclick')
        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    display: flex;
    .completed-menu {
      flex: 0;
    }
    .item-content {
      flex: 1;
      text-align: left;
      padding-left: 20px;
      .item-title {
        line-height: 30px;
        font-size: 16px;
        font-weight: 700;
        height: 30px;
      }
      .item-remarks {
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        height: 20px;
      }

    }
}
</style>
<style lang="scss">
@import '../../scss/common.scss';
    .md-switch.md-checked {
     ::v-deep .md-switch-container{
          background-color: #e8b6d4;
          .md-ripple {
            background-color: $themeColor;
          }
      }
  }
</style>