<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

  </div>
  <div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      console.log('***'.repeat(3));
    });
    return {};
  },
};
</script>
