<template>
  <d-card shadow="always">
    <div class="top">
      <!-- 定义子组件 -->
      <d-button round type="primary">primary</d-button>
      <d-button round type="success">success</d-button>
      <d-button round type="warning">warning</d-button>
      <d-button round type="danger">danger</d-button>
      <d-button round type="info">info</d-button>
    </div>
    <div class="bottom">
      <!-- 定义子组件 -->
      <d-button border round type="primary">primary</d-button>
      <d-button border round type="success">success</d-button>
      <d-button border round type="warning">warning</d-button>
      <d-button border round type="danger">danger</d-button>
      <d-button border round type="info">info</d-button>
    </div>
    <div slot="footer" style="display: flex; justify-content: center">
      <codeView compName="button" demoName="demo1"></codeView>
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
