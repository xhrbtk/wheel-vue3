<template>
    <div>
        <div class="layout">
            <Topnav class="nav"></Topnav>
            <div class="content" >
                <aside >
                    <ol>
                       <li>组件列表</li>
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
  >.nav {
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-grow: 1;
    padding: 40px 0 0;
    padding-left: 153px;
    aside {
      flex-shrink: 0;
      width: 150px;
      padding: 0 16px 16px 16px;
      position: fixed;
      left: v-bind(leftStyle);
      background: #fff;
      height: 100%;
      border-right: 1px solid #f0f0f0;
      transition: all 1s linear;
      h2 {
        margin-bottom: 4px;
      }
      ol {
        li {
          font-size: 15px;
          color: #00000073;
          height: 40px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          padding-left: 4px;
          &:hover{
            color: #1890ff;
          }
        }
      }
    }
    main {
      flex-grow: 1;
      padding: 20px 170px 32px 64px;
    }
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}

aside {
  
}
main {
  overflow: auto;
}
</style>