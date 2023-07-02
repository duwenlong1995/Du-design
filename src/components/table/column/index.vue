<template>
        <!-- 表头开始 -->
        <thead bgcolor="black">
          <tr align="center">
              <td>
                {{ label }}
              </td>
          </tr>
        </thead>
        <!-- 表头结束 -->
        <!-- 表体开始 -->
        <tbody>
          <tr align="center">
              <td>
                {{ data }}
              </td>
          </tr>
        </tbody>
        <!-- 表体结束 -->
  </template>
  <script>
  // 解构
  import "../column/scss/index.scss";
  import { defineComponent } from "vue";
  // 模块化
  export default defineComponent({
    name: "dTableColumn", //组件名称
    props: {
      // 接收父组件数据
      label: {
        type: String,
      },
      data:{
        type:String,
      }
    },
    components: {
      // 定义子组件
    },
  
    setup(props) {
        console.log(props.data);
      return {
      };
    },
  });
  </script>
  