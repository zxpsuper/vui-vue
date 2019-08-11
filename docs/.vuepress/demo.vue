<template>
  <div class="vu-demo-block">
    <div class="component-container">
      <slot name="comp"></slot>
    </div>
    <transition name="slide-up">
      <div v-show="showCode">
        <slot name="code"></slot> 
      </div>
    </transition>
    <div @click="showCode = !showCode" class="show-code-btn">{{showCode ? '隐藏代码' : '显示代码'}}</div>
  </div>
</template>
<script>
export default {
  name:'demoBlock',
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style lang="less">
.vu-demo-block {
  margin-top: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5)
  }
  .component-container {
    padding: 24px;
    .language-vue {
      border-radius: none !important
    }
  }
  .show-code-btn {
    text-align: center;
    padding: 12px;
    border-top: 1px solid #ebebeb;
    cursor: pointer;
    &:hover {
      color: #409eff
    }
  }
}
</style>
