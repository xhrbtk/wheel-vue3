<template>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false"  :cancel="cancel"></Dialog>
</template>

<script lang="ts" setup>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue';
const visible = ref(false)
const toggle = () => {
    console.log('lllll')
    visible.value = !visible.value
}
const ok = () => {
    console.log('ok')
}
const cancel = () => {
    console.log('cancel')
}
</script>