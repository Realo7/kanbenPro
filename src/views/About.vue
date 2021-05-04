<template>
  <div class="content">
    <h1>This is an about page</h1>
    <van-cell title="选择单个日期"
              :value="date"
              @click="show = true" />
    <van-calendar v-model:show="show"
                  @confirm="onConfirm" />
    <van-cell-group>
      <van-field @change="change"
                 v-model="value"
                 label="文本"
                 placeholder="请输入用户名" />
    </van-cell-group>
  </div>
  <my-tabbar></my-tabbar>
</template>
<script>
import MyTabbar from '@/components/myTabbar.vue';
import { ref } from 'vue';

export default {
  components: { MyTabbar },
  setup() {
    const value = ref('');
    const date = ref('');
    const show = ref(false);
    const change = () => {
      console.log(value);
    };
    const formatDate = (param) => `${param.getMonth() + 1}/${param.getDate()}`;
    const onConfirm = (param) => {
      show.value = false;
      date.value = formatDate(param);
    };

    return {
      change,
      value,
      date,
      show,
      onConfirm,
    };
  },
};
</script>
