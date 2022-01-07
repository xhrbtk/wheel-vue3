<template>
    <div>
        <div class="layout">
            <Topnav class="nav"></Topnav>
            <div class="content" >
                <aside >
                    <h2>组件列表</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/switch">Switch 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/button">Button 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/dialog">Dialog 组件</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/tabs">Tabs 组件</router-link>
                        </li>
                    </ol>
                </aside>
                <main>
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Topnav from "../components/Topnav.vue";
import { inject, Ref, computed } from 'vue';
const menuVisible = inject<Ref<boolean>>('menuVisible') // get

const leftStyle = computed(() => {
  let width = document.documentElement.clientWidth
  if(width <= 500){
    if(menuVisible.value === false){
      return '-150px'
    }else{
      return '0px'
    }
      
  }
  return '0px'
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 8px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: v-bind(leftStyle);
  top: 60px;
  height: 100%;
  transition: all 1s linear;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>