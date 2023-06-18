<template>
  <div class="container">
    <!-- 定义子组件 -->
    <d-card>
      <div slot="header" style="display: flex; justify-content: space-between;">
        <span>title</span>
      <d-button type="text">primary</d-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
    {{'content ' + o }}
  </div>
    </d-card>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
</style>
