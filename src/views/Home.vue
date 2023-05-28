<template>
  <div className="Container">
    <!-- <d-button>默认1</d-button>
    <d-button type="success">默认2</d-button> -->
    <Index></Index>
    <d-input v-model:modelValue="dataVal" />
    <div className="left-menu">
     <div class="router-view">
      <router-view></router-view>
     </div>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue"
import {ref} from "vue"
const Index = defineAsyncComponent(() =>
  import("../components/container/whole container/index.vue")
);
// 模块化
export default {
  name: "Home", //组件名称
  props: {
    // 接收父组件数据
  },
  components: {
    // 定义子组件
    Index,
  },
  setup() {
    // 这里没有this,直接使用props里数据
    const dataVal=ref('10')
    return {dataVal}
  },
};
</script>

<style scoped>
.Container{
  height:100vh;
  width:100%;
  display: flex;
}
.left-menu{
  width:360px;
  height: auto;
  overflow-y: auto;
  border-right: 1px solid #f0f0f0;
}
.router-view{
flex:1;
height: auto;
overflow-y: auto;
}
</style>
