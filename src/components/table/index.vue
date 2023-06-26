<template>
  <div class="table">
    <table border="1" height="200" width="600" align="left" cellpadding="5">
      <!-- 表头开始 -->
      <thead bgcolor="black">
        <tr class="tableHeader" align="center">
          <template v-for="item in tableHeader" :key="item.id">
            <td v-for="item2 in tdArr(item)" v-if="item2.tag != 'id'">
              {{ item2.value }}
            </td>
          </template>
        </tr>
      </thead>
      <!-- 表头结束 -->
      <!-- 表体开始 -->
      <tbody>
        <tr align="center">
          <template v-for="info in tableData" :key="item.id">
            <td v-for="info2 in tndArr(info)" v-if="info2.tag != 'id'">
              {{ info2.value }}
            </td>
          </template>
        </tr>
      </tbody>
      <!-- 表体结束 -->
    </table>
  </div>
</template>
<script>
// 解构
import { computed, reactive, defineComponent } from "vue";
import "../table/scss/index.scss";
// 模块化
export default defineComponent({
  name: "dTable", //组件名称
  props: {
    // 接收父组件数据
    columns: {
      type: Array,
    },
    headers: {
      type: Array,
    },
  },
  components: {
    // 定义子组件
  },

  setup(props) {
    const tableHeader = reactive(props.headers);
    const tableData = reactive(props.columns);
    // 计算属性动态列开始
    const DynamicColumn = computed({
      tdArr() {
        return (item) => {
          let arr = [];
          for (let key in item) {
            arr.push({
              tag: key,
              value: item[key],
            });
          }
          return arr;
        };
      },
      // tndArr() {
      //     return (info) => {
      //                 let arr1 = []
      //                 for (let key in info) {
      //                     arr.push({
      //                         'tag': key,
      //                         'value': info[key]
      //                     })
      //                 }

      //                 return arr2
      //             }
      //         }
    });
    // 计算属性动态列结束

    return {
      tableHeader,
      tableData,
      DynamicColumn,
    };
  },
});
</script>
