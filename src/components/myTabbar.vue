<template>
  <div>
    <van-tabbar v-model="active"
                @change="onChange">
      <van-tabbar-item icon="home-o"
                       to="/"> 主页 </van-tabbar-item>
      <van-tabbar-item icon="search"
                       to="about">关于</van-tabbar-item>

      <van-tabbar-item icon="setting-o"
                       to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) => {
      Toast(`${index}`);
    };
    return { active, onChange };
  },
};
</script>
