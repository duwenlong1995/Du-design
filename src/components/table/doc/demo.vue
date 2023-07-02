<template>
  <div class="container">
    <!-- 定义子组件 -->
    <dTable :columns="tableData">
      <d-table-column label="日期" data="date"></d-table-column>
      <d-table-column label="姓名" data="name"></d-table-column>
      <d-table-column label="地址" data="address"></d-table-column>
    </dTable>
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
  }
]);
</script>
<style scoped>

</style>
