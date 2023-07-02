<template>
  <div class="table">
    <table border="1" height="200" width="600" align="left" cellpadding="5">
        <slot></slot>
    </table>
  </div>
</template>
<script>
// 解构
import { defineComponent } from "vue";
import "../table/scss/index.scss";
// 模块化
export default defineComponent({
  name: "dTable", //组件名称
  props: {
    // 接收父组件数据
    columns:{
        type:Array,
    },
  },
  components: {
    // 定义子组件
  },

  setup(props) {
    console.log(props.columns);
    return {
  
    };
  },
});
</script>
