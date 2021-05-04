<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
                       to="/"> 主页 </van-tabbar-item>
      <van-tabbar-item icon="search"
                       to="about">关于</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
