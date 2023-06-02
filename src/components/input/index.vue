<template>
<div>
<!-- 定义子组件 -->
<input type="text" v-model="inputValue" />
<div>{{ modelValue }}</div>
</div>
</template>
<script>
// 解构
import { defineComponent
} from 'vue'
import { useVModel } from '@vueuse/core'
// 数据双向绑定 v-model语法糖 ---> :modelValue  +  @update:modelValue
// 模块化
export default defineComponent({
name:'dInput', //组件名称
props: {
// 接收父组件数据
modelValue:{
    type:String || Number
}
},
components: {
// 定义子组件
},
setup(props, { emit }){
// useVModel函数代理了父子之间的数据交互
const inputValue = useVModel(props, 'modelValue', emit)
// console.log(inputValue.value);
return {
    inputValue,
}
}
})
</script>
<style  lang='less' scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
input{
    border:1px solid #725EEB;
}
input:active{
    border:1px solid #725EEB;
}
</style>
 