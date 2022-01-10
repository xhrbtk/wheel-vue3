<template>
    <button class="wheel-switch" :class="{ 'wheel-checked': value }" @click="toggle">
        <span></span>
    </button>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['update:value'])
const toggle = () => {
    emit('update:value', !props.value)
}

</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.wheel-switch{
    height: $h;
    width: $h * 2;
    border: none;
    background: gray;
    border-radius: calc($h / 2);
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &.wheel-checked{
        background: #1890ff;
        span{
            left: calc(100% - #{$h2} - 2px)
        }
    }
    span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: calc($h2 / 2);
        transition: all 0.3s linear;
    }
}

</style>