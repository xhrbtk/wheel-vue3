<template>
    <div class="topnavAndBanner">
        <Topnav></Topnav>
        <div class="banner">
            <h1 class="title1">WHEEL-VUE3</h1>
            <h2 class="title2">一个有意思的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/xhrbtk/wheel-vue3">GITHUB</a>
                <router-link to="/doc" >开始</router-link>
                
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
          <li>
              <svg class="icon" >
                <use xlink:href="#icon-vue"></use>
              </svg>
              <h3>基于 Vue 3</h3>
              <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
              <svg class="icon" >
                <use xlink:href="#icon-ts"></use>
              </svg>
              <h3>基于 Typescript</h3>
              <p>源代码采用 Typescript 书写(非严格检查)</p>
          </li>
          <li>
              <svg class="icon" >
                <use xlink:href="#icon-d"></use>
              </svg>
              <h3>代码易读</h3>
              <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
    </div>

</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}

</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title1{
      margin-top: 80px;
    }
    .actions{
      padding: 10px 0;
      a {
        margin: 0 8px;
        background: $green;
        color: #fff;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;
      }
    }
  }
}
.features{
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}



</style>