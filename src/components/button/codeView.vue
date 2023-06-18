<template>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "HiddenCode" : "ShowCode" }}</span>
      <i class="m-icon-code"></i>
    </div>
  <div class="pre-code-box">
    <pre class="language-html" v-if="showCode">
    <code class="language-html">
        {{ sourceCode }}
    </code>
  </pre>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  compName: {
    type: String,
    default: "",
    required: true,
  },
  demoName: {
    type: String,
    default: "",
    required: true,
  },
});
const border = ref("1px solid rgha(0,0,0,.06)");
const showCode = ref(false);
const showOrhideCode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getCode() {
  const isDev = import.meta.env.MODE === "development";
  // 判断是否是开发环境还是生产环境
  console.log(props.compName);
  if (isDev) {
    sourceCode.value = (
      await import(`../${props.compName}/doc/${props.demoName}.vue?raw`)
    ).default;
  } else {
    sourceCode.value = await fetch( `../${props.compName}/doc/${props.demoName}.vue`).then((res) => {
      res.text();
    });
  }
}
onMounted(() => {
  getCode();
});
</script>
<style scoped></style>
