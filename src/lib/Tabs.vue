<template>
    <div class="wheel-tabs" >
        <div class="wheel-tabs-nav" ref="container">
            <div class="wheel-tabs-nav-item" 
                v-for="(t,index) in titles" 
                :key="index"
                :class="{ selected: t === selected }"
                @click="select(t)"
                :ref="el => { if(t == selected) selectedItem = el }"
                >
                {{t}}
            </div>
            <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="wheel-tabs-content">
            <component class="wheel-tabs-content-item" :is="current" :key="current" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, onMounted,  watchEffect } from 'vue'
import Tab from './Tab.vue'
export default{
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context){
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)
        onMounted(() => {
            watchEffect(() => {
            // watchEffect 在onMounted 之前就会执行 为避免错误 加if 判断
                const { width, left:left1 } = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                const { left:left2 } = container.value.getBoundingClientRect()
                const left = left1 - left2
                indicator.value.style.left = left + 'px'
            })
        })
        const defaults = context.slots.default()
        defaults.forEach(tag => {
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是Tab')
            }
        })
        const current = computed(() => {
            let x = defaults.filter(tag => tag.props.title === props.selected)[0]
            console.log('x', x)
            return x
        })
        const titles = defaults.map(tag => tag.props.title)
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return { defaults, titles, current, select, selectedItem, indicator, container }
    }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all linear 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>