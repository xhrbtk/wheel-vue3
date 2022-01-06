<template>
  <router-view></router-view>
</template>


<script lang="ts" setup>
import { ref, provide } from 'vue'
const width = document.documentElement.clientWidth
console.log('width', width)
const menuVisible = ref(width <= 500 ? false : true)
console.log('app 获取的menuVisible是', menuVisible.value)
provide('menuVisible', menuVisible) // set

</script>