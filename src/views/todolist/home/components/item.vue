<template>
  <div class="item">
    <md-switch class="completed-menu" v-model="item.completed"></md-switch>
    <div class="item-content">
      <div class="item-title" @dblclick="dblclick">
        <div v-show="!showTitleInput">{{ item.title }}</div>
      </div>
      <md-field v-show="showTitleInput">
        <md-input
          v-model="item.title"
          @blur="showTitleInput = false"
          @keyup.enter="showTitleInput = false"
          @mouseout="showTitleInput = false"
        ></md-input>
      </md-field>
      <div
        v-if="item.remark"
        v-show="!showRemarksInput"
        class="item-remarks"
        @dblclick="showRemarksInput = true"
        @mouseout="showRemarksInput = false"
      >
        {{ item.remark }}
      </div>
      <md-field v-show="showRemarksInput">
        <md-input
          v-model="item.remark"
          placeholder="备注"
          @blur="showRemarksInput = false"
          @keyup.enter="showRemarksInput = false"
        ></md-input>
      </md-field>
      <div
        v-if="item.time"
        v-show="!showDatePicker"
        class="item-time"
        @dblclick="showDatePicker = true"
      >
        {{ item.time }}
      </div>
      <md-datepicker
        v-model="item.time"
        v-show="showDatePicker"
        md-immediately
        @md-closed="showDatePicker = false"
      />
    </div>
  </div>
</template>
<script>
import func from '@/store/todolist/function.js';
export default {
  data() {
    return {
      showTitleInput: false,
      showRemarksInput: false,
      showDatePicker: false
    };
  },
  props: {
    item: Object
  },
  methods: {
    dblclick() {
      console.log('dbclick');
      this.showTitleInput = true;
      this.showRemarksInput = true;
      this.showDatePicker = true;
    }
  }
};
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
  ::v-deep .md-switch-container {
    background-color: #e8b6d4;
    .md-ripple {
      background-color: $themeColor;
    }
  }
}
</style>
