<template>
    <div>
        <Switch v-model:value="y" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
const y = ref(false)

</script>

