<template>
<div :class="dClass">
<!-- 定义子组件 -->
<button>
    <slot></slot>
</button>
</div>
</template>
<script lang="ts">
// import './index.css'
// 解构
import { defineComponent
} from 'vue'
import {computed} from 'vue'
// 模块化
export default defineComponent({
name:'dButton', //组件名称
props: {
// 接收父组件数据
type:{
    type:String,
    default:'default',
}
},
components: {
// 定义子组件
},
setup(props){
// 这里没有this,直接使用props里数据
const dClass =computed(()=>{
    return[
    "dButton", `dButton-${props.type}`
    ] 
})
return {
    dClass
}
}
})
</script>
<style lang="scss" scoped>
button{
    outline:none;
    border:0;
    background:none;
    cursor:pointer;
    &:hover,&focus{
    opacity:0.8
}
}
.dButton{
button{
padding:12px 24px;
border-radius:4px;
border:1px solid #b4b0b0;

}
}
.dButton-default{
button{
    background:#b4b0b0
}
}
.dButton-success{
button{
    background:green;
}
}
</style>
