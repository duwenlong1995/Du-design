<template>
  <div class="table">
    <table>
      <tbody>
        <tr class="tableHeader" v-for="item in tableHeader">
          <td v-for="item2 in tdArr(item)" v-if="item2.tag != 'id'">
            {{ item2.value }}
          </td>
        </tr>
        <tr v-for="info in tableData">
          <td v-for="info2 in tndArr(info)" v-if="info2.tag != 'id'">
            {{ info2.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// 解构
import { computed,reactive,defineComponent } from "vue";
// 模块化
export default defineComponent({
  name: "dTable", //组件名称
  props: {
    // 接收父组件数据
    columns:{
        type:Array,
    },
    headers:{
        type:Array, 
    }
  },
  components: {
    // 定义子组件
  },

  setup(props) {
   const tableHeader=reactive(props.headers)
   const tableData=reactive(props.columns)
   console.log(DynamicColumn.value);
     // 计算属性动态列开始
  const DynamicColumn=computed({ 
    tdArr() {
        return (item) => {
                    let arr = []
                    for (let key in item) {
                        arr.push({
                            'tag': key,
                            'value': item[key]
                        })
                    }
                 
                    return arr
                }

    },
    tndArr() {
        return (info) => {
                    let arr1 = []
                    for (let key in info) {
                        arr.push({
                            'tag': key,
                            'value': info[key]
                        })
                    }
                  
                    return arr2
                }
            }
        })
// 计算属性动态列结束

    return {
        tableHeader,tableData,DynamicColumn
    };
  },
});
</script>
<style lang="less" scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
 /* 表格下边框颜色 */
 table {
        border: 3px solid #307ed3;
        position: relative;
        top: 20px;
        left: 50%;
        transform: translate(-50%);
        width: 90%;
        height: 90%;
        border-spacing: 0px;
        color: #74a8d7;
        text-align: center;
        table-layout: fixed;
        word-break: break-all;
        font-size: 20px;
        .tableHeader {
            color: #5e75a1;
        }
        td {
            border: 1px solid #49698f;
            width: 60px;
        }
    }
    .table {
        width: 100%;
        height: 90%;
        overflow: auto;
    }

</style>
