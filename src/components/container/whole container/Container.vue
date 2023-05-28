<template>
  <div className="container">
      <slot></slot>
  </div>
</template>

<script>
// 模块化
import {ref,onMounted} from 'vue'
export default {
  name: "container", //组件名称
  props: {
    // 接收父组件数据
  },
  components: {
    // 定义子组件
  },
  setup() {
    const  isNested = ref(true)
    // 这里没有this,直接使用props里数据
//  const parent=onMounted(()=>{
//   if ($parent) {
//       isNested = true
//     }
//  })
    return {parent};
  },
};                          
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: row;
}
.duContainer{
  display: flex;
  flex-direction: column;
}
</style>


