<template>
    <div className="Footer">
      <slot></slot>
    </div>
  </template>
  <script>
  // 模块化
  export default{
    name: "Footer", //组件名称
    props: {
      // 接收父组件数据
    },
    components: {
      // 定义子组件
    },
    setup() {
      // 这里没有this,直接使用props里数据
      return {};
    },
  };
  </script>

  