<template>
  <div class="container">
    <!-- 定义子组件 -->
    <d-button round type="primary">primary</d-button>
    <d-button round type="success">success</d-button>
    <d-button round type="warning">warning</d-button>
    <d-button round type="danger">danger</d-button>
    <d-button round type="info">info</d-button>
  </div>
  <div class="container">
    <!-- 定义子组件 -->
    <d-button border round type="primary">primary</d-button>
    <d-button border round type="success">success</d-button>
    <d-button border round type="warning">warning</d-button>
    <d-button border round type="danger">danger</d-button>
    <d-button border round type="info">info</d-button>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.container {
  width: 45%;
  display: flex;
  justify-content: space-between;
}
</style>
