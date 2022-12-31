<template>
  <home-header></home-header>
</template>

<script>
//引入组件
import HelloWorld from "@/components/HelloWorld.vue";
import HomeHeader from "@/components/Header.vue";

export default {
  name: "Home",
  //注册组件
  components: {
    HelloWorld,
    HomeHeader,
  },
};
</script>
