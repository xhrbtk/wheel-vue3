<template>
    <div>
        <div class="layout">
            <Topnav class="nav" toggleMenuButtonVisible></Topnav>
            <div class="content" >
                <aside >
                    <h2>文档</h2>
                    <ol>
                      <li>
                        <router-link to="/doc/intro">介绍</router-link>
                      </li>
                      <li>
                        <router-link to="/doc/install">安装</router-link>
                      </li>
                      <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                      </li>
                    </ol>
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
  >.nav {
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-grow: 1;
    padding: 100px 16px 0 160px;
    aside {
      flex-shrink: 0;
      width: 150px;
      position: fixed;
      left: v-bind(leftStyle);
      background: #fff;
      height: 100%;
      transition: all 250ms linear;
      top: 100px;
      padding-left: 16px;
      h2 {
        margin-bottom: 4px;
        font-size: 16px;;
      }
      ol {
        li {
          >a{
            display: block;
            padding: 4px 26px;
            font-size: 15px;
            color: #00000073;
            margin-top: 20px;
            &:hover{
              color: #1890ff;
            }
            &.router-link-active{
              background: #e6f7ff;
              color: #1890ff;
              text-decoration: underline;
            }
          }
          
        }
      }
    }
    main {
      flex-grow: 1;
      overflow: auto;
      padding-left: 10px;
    }
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
</style>