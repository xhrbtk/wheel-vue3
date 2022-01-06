<template>
  <router-view></router-view>
</template>


<script lang="ts" setup>
import { ref, provide } from 'vue'
const menuVisible = ref(false)
console.log('app 获取的menuVisible是', menuVisible.value)
provide('menuVisible', menuVisible) // set

</script>