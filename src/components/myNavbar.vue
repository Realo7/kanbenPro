<template>
  <van-nav-bar title="标题"
               left-text="返回"
               right-text="按钮"
               left-arrow
               @click-left="onClickLeft"
               @click-right="onClickRight" />
</template>
<script>
import { Toast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => Toast('返回');
    const onClickRight = () => Toast('按钮');
    return {
      onClickLeft,
      onClickRight,
    };
  },
};
</script>
