<template>
  <div class="container">
    <!-- 定义子组件 -->
    <dTable :columns="tableData" :headers="tableHeader"> </dTable>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const tableData = reactive([
  {
    id: 0,
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    id: 1,
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    id: 2,
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    id: 3,
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
]);
const tableHeader = reactive([
  { id: 0, tag: "日期" },
  { id: 1, tag: "姓名" },
  { id: 2, tag: "地址" },
]);
</script>
<style scoped></style>
