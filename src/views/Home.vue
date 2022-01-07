<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1 class="title1">WHEEL-UI</h1>
            <h2 class="title2">一个有意思的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/xhrbtk/wheel-vue3">GITHUB</a>
                <router-link to="/doc" >开始</router-link>
                
            </p>
        </div>
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
.banner {
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  height: 100vh;
  .title1{
    margin-top: 80px;
  }
  .title1, .title2{
    color: #1890ff;
  }
  .actions{
    padding: 10px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 40px;
      height: $h;
      line-height: $h;
      border-radius: calc($h / 2);
      padding: 0 40px;
      color: rgb(17,148,246);
      border: 1px solid rgb(17,148,246);
    }
  }
}
</style>