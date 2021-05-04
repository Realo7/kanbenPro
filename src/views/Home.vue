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
import { onMounted } from 'vue';
import MyTabbar from '@/components/myTabbar.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: { MyTabbar },
  setup() {
    onMounted(() => {
      console.log('***'.repeat(3));
    });
    return {};
  },
};
</script>
