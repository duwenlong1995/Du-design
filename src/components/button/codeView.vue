<template>
  <div class="whole">
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "HiddenCode" : "ShowCode" }}</span>
      <i class="m-icon-code"></i>
    </div>
    <div class="codeBox">
      <pre class="language-html" v-if="showCode">
    <code class="language-html">
        {{ sourceCode }}
    </code>
  </pre>
    </div>
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
  if (isDev) {
    let urlOne=`../${props.compName}/doc/${props.demoName}.vue?raw`
    sourceCode.value = (await import(urlOne)).default;
  } else {
    let urlTwo=`../${props.compName}/doc/${props.demoName}.vue`
    sourceCode.value = await fetch(urlTwo).then((res) => {
      res.text();
    });
  }
}
onMounted(() => {
  getCode();
});
</script>
<style lang="scss" scoped>
.whole {
  display: flex;
  flex-direction: column;
  .showCode {
    display: flex;
    justify-content: center;
  align-items: center;
    width: 950px;
    height: 30px;
    margin-top: 20px;
    user-select: none;
  }
  .showCode:hover {
    background-color: #f9fafc;
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .showCode:active{
    border: 1px solid #00a4f4;
  }
  .codeBox {
  }
}
</style>
