<template>
  <div className="Container">
    <!-- <d-button>默认1</d-button>
    <d-button type="success">默认2</d-button> -->
    <!-- <Index></Index> -->
    <!-- <d-input v-model:modelValue="dataVal" /> -->
    <div className="left-menu">
      <li v-for="(item, index) in a" :key="index" @click="switchMenu(item,index)" >
        {{ item.name }}
      </li>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script lang="ts">
// 引入路由
import { useRouter } from 'vue-router'
// 引入路由文件
import menuList from "../router/routerPages/page";
// console.log(menuList[0].children);
import { defineAsyncComponent } from "vue";
import { ref,reactive } from "vue";
const Index = defineAsyncComponent(
  () => import("../components/container/whole container/index.vue")
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
    const router = useRouter()
  
    // 跳转路由
    const switchMenu=(item:any,index:any)=>{
    
      router.push({
        name:item.name
      })
    }
    const a = reactive(menuList[0].children);
    const dataVal = ref("10");
    return {
      dataVal,
      a,
     
      switchMenu,
      router
    };
  },
};
</script>

<style scoped>
.Container {
  height: 100vh;
  width: 100%;
  display: flex;
}
.left-menu {
  width: 360px;
  height: auto;
  overflow-y: auto;
  border-right: 1px solid #f0f0f0;
}
.router-view {
  flex: 1;
  height: auto;
  overflow-y: auto;
  padding:0 15px;
  box-sizing: border-box;
}
li{
  list-style: none;
  line-height: 40px;
  padding: 0 20px;
  cursor: pointer;
  user-select:none;
  box-sizing: border-box;
}
li:hover{
  border-radius: 6px;
  /* border-right: 4px solid #0e80eb; */
  color: #0e80eb;
  background-color: rgba(14,128,235,.1);
}
</style>
