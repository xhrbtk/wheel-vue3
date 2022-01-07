<template>
    <div class="topnav">
        <div class="logo">
            <svg class="icon icon-logo" aria-hidden="true">
                <use xlink:href="#icon-longmao-"></use>
            </svg>
            <span>WHEEL UI</span>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <svg class="icon toggleAside" aria-hidden="true" @click="toggleMenu">
            <use xlink:href="#icon-yangshi_icon_tongyong_nav_drawer"></use>
        </svg>
    </div>
</template>
<script lang="ts" setup>
import { inject, Ref } from 'vue'

const menuVisible = inject<Ref<boolean>>('menuVisible') //get
const toggleMenu = () => {
    menuVisible.value = !menuVisible.value
}

</script>
<style lang="scss" scoped>
.topnav { 
    background: #fff;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px #f0f1f2;
    .logo{
        max-width: 30em;
        margin-right: auto;
        cursor: pointer;
        color: #1890ff;
        font-weight: 500;
        display: flex;
        align-items: center;
        .icon-logo{
            width: 50px;
            height: 50px;
            margin-right: 20px;
        }
    }
    .menu{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        li{
            margin: 0 1em;
            color: #1890ff;
            cursor: pointer;
        }
    }
    .toggleAside{
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        cursor: pointer;
    }
    @media (max-width: 500px) {
        .menu{
            display: none;
        }
        .logo{
            margin: 0 auto;
        }
        .toggleAside{
            display: inline-block;
        }
    }
}
</style>