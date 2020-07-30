<template>
  <div class="tab">
    <span
      v-for="state in states"
      :key="state"
      :class="['item', curState == state ? 'active' : '']"
      @click="toggleFlitter(state)"
    >
      {{ state }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'tab',
  props: {
    curState: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    };
  },
  methods: {
    toggleFlitter(state) {
      this.$emit('toggle', state);
    }
  }
};
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  .item {
    display: inline-block;
    flex: 1 1 auto;
    line-height: 50px;
    &:hover {
      cursor: pointer;
      background: #e4e4e4;
    }
  }
  .active {
    color: #b17;
  }
}
</style>
