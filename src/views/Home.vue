<template>
  <div class="content">
    <van-cell-group>
      <van-cell title="单元格"
                value="内容" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />

      <van-cell title="单元格"
                value="内容"
                label="描述信息" />

      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />

    </van-cell-group>
  </div>
  <my-tabbar></my-tabbar>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue';
import MyTabbar from '@/components/myTabbar.vue';
import { useStore } from 'vuex';
import { getAuthCode } from '@/utils/dingtalk';

// @ is an alias to /src

export default {
  name: 'Home',
  components: { MyTabbar },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      console.log(process.env.NODE_ENV);
      // 获取钉钉临时授权码
      const authCode = getAuthCode(process.env.VUE_APP_CORPID);
      store
        .dispatch('dduserlogin', authCode)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    onMounted(() => {
      store.dispatch('getToken');
    });
    return {};
  },
};
</script>
