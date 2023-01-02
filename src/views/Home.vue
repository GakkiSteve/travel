<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
//引入组件
import HelloWorld from "@/components/HelloWorld.vue";
import HomeHeader from "@/components/Header.vue";
import HomeSwiper from "@/components/Swiper.vue";
import HomeIcons from "@/components/Icons.vue";
import HomeRecommend from "@/components/Recommend";
import HomeWeekend from "@/components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  //注册组件
  components: {
    HelloWorld,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  methods: {
    getHomeInfo() {
      axios.get("/mock/index.json").then(this.getHomeInfoSucc);
      // axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
};
</script>
