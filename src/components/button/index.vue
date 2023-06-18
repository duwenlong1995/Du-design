<template>
  <!-- 定义子组件 -->
  <div>
    <button
      class="dButton"
      :class="[theme, shape, bordering]"
      @click="change"
      :disabled="disabled">
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>
<script lang="ts">
import "./css/index.scss";
// 解构
import { defineComponent } from "vue";
import { computed } from "vue";
// 模块化
export default defineComponent({
  name: "dButton", //组件名称
  props: {
    // 接收父组件数据
    type: {
      type: String,
      default: "default",
    },
    round: Boolean,
    disabled: Boolean,
    loading: Boolean,
    border: Boolean,
  },
  components: {
    // 定义子组件
  },
  setup(props, context) {
    // 这里没有this,直接使用props里数据
    // 按钮的类型
    const theme = computed(() => {
      return props.type ? `dButton-${props.type}` : "";
    });
    // 按钮的形状
    const shape = computed(() => {
      return props.round ? `round-${props.round}` : "";
    });
    // 边框按钮
    const bordering = computed(() => {
      return props.border ? `border-${props.type}-${props.border}` : "";
    });
    // 方法
    function change() {
      context.emit("click");
    }
    return {
      theme,
      shape,
      change,
      bordering,
    };
  },
});
</script>
