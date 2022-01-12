<template>
    <div class="wheel-tabs">
        <div class="wheel-tabs-nav">
            <div class="wheel-tabs-nav-item" 
            v-for="(t,index) in titles" :key="index"
            :class="{ selected: t === selected }"
            @click="select(t)"
            >{{t}}</div>
        </div>
        <div class="wheel-tabs-content">
            <component class="wheel-tabs-content-item" :is="current" :key="current" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default{
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context){
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
        return { defaults, titles, current, select }
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
  }
  &-content {
    padding: 8px 0;
  }
}
</style>