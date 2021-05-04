<template>
  <div id="nav">
    <router-link to="/">主页</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <div class="main">
    <router-view />
  </div>
  <my-tabbar></my-tabbar>
</template>
<script>
import MyTabbar from './components/myTabbar.vue';

export default {
  components: { MyTabbar },
  setup() {},
};
</script>

<style lang="scss">
.main {
  height: 90%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
