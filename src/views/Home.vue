<template>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</template>

<script>
//引入组件
import HelloWorld from "@/components/HelloWorld.vue";
import HomeHeader from "@/components/Header.vue";
import HomeSwiper from "@/components/Swiper.vue";
import HomeIcons from "@/components/Icons.vue";
export default {
  name: "Home",
  //注册组件
  components: {
    HelloWorld,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  },
};
</script>
