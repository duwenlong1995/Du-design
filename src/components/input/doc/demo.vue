<template>
    <div class="container">
    <!-- 定义子组件 -->
    <d-input v-model="val" />
    </div>
    </template>
    <script setup>
 import { ref } from "vue";
    const val=ref("")
    
    </script>
    <style scoped>
    
    </style>
     