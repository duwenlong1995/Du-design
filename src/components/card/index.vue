<template>
  <div>
    <div class="dCard" :class="[shadowStyle]">
      <div class="card-head" v-if="$slots.header || header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
      <div class="card-foot" v-if="$slots.footer || footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// 解构
import "./scss/index.scss";
import { defineComponent } from "vue";
import { computed } from "vue";
// 模块化
export default defineComponent({
  name: "dCard", //组件名称
  props: {
    // 接收父组件数据
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
  },
  components: {
    // 定义子组件
  },
  setup(props) {
    // 这里没有this,直接使用props里数据
    // 卡片阴影的类型
    const shadowStyle = computed(() => {
      return props.shadow ? `dCard-${props.shadow}` : "";
    });
    return { shadowStyle };
  },
});
</script>
