<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity"
import { provide } from "@vue/runtime-core"
export default{
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible)

  }
}
</script>
