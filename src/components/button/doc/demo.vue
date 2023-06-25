<template>
  <d-card shadow="always">
    <div class="top">
      <!-- 定义子组件 -->
      <d-button type="primary">primary</d-button>
      <d-button type="success">Sign in</d-button>
      <d-button type="warning">warning</d-button>
      <d-button type="danger">danger</d-button>
      <d-button type="info">info</d-button>
    </div>
    <div class="bottom">
      <d-button border type="primary">primary</d-button>
      <d-button border type="success">Sign in</d-button>
      <d-button border type="warning">warning</d-button>
      <d-button border loading type="danger">danger</d-button>
      <d-button border disabled type="info">info</d-button>
    </div>
    <div slot="footer" style="display: flex; justify-content: center">
      <codeView compName="button" demoName="demo"></codeView>
    </div>
  </d-card>
</template>
<script setup>
import codeView from "../codeView.vue";
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
:deep(.card-body){
  min-width: 950px;
}
:deep(.dCard){
  padding: 20px 20px 20px 20px;
}
</style>
