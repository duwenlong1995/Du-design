<template>
    <div class="container">
      <!-- 定义子组件 -->
      <d-button disabled round type="primary">primary</d-button>
      <d-button disabled round type="success">success</d-button>
      <d-button disabled round type="warning">warning</d-button>
      <d-button disabled round type="danger">danger</d-button>
      <d-button disabled round type="info">info</d-button>
    </div>
    <div class="container">
      <!-- 定义子组件 -->
      <d-button disabled border round type="primary">primary</d-button>
      <d-button disabled border round type="success">success</d-button>
      <d-button disabled border round type="warning">warning</d-button>
      <d-button disabled border round type="danger">danger</d-button>
      <d-button disabled border round type="info">info</d-button>
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
  