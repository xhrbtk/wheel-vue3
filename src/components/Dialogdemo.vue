<template>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog 
    v-model:visible="visible"  
    :closeOnClickOverlay="false"  
    :cancel="cancel"
    >
    <template v-slot:title>
        title
    </template>
    <template v-slot:content>
        <strong>hi</strong>
        <div>h2</div>
    </template>
    </Dialog>

    <h2>示例2</h2>
    <Button @click="showDialog">显示dialog</Button>
</template>

<script lang="ts" setup>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog.ts'
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
const showDialog = () => {
    openDialog({
        title: '标题',
        content: '内容',
        ok: () => {
            console.log('ok')
        },
        cancel: () => {
            console.log('cancel')
        }
    })
}
</script>