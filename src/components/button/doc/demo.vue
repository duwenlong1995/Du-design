<template>
<div class="container">
<!-- 定义子组件 -->
<d-button type="primary">primary</d-button>
<d-button type="success">Sign in</d-button>
<d-button type="warning">warning</d-button>
<d-button type="danger">danger</d-button>
<d-button type="info">info</d-button>
</div>
<div class="container">
<!-- 定义子组件 -->
<d-button border type="primary">primary</d-button>
<d-button border type="success">Sign in</d-button>
<d-button border type="warning">warning</d-button>
<d-button border loading type="danger">danger</d-button>
<d-button border disabled type="info">info</d-button>
</div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.container{
    width:45%;
    display: flex;
    justify-content: space-between;
}
</style>
 