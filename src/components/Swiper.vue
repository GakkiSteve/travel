<template>
  <div class="wrapper">
    <swiper
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
      v-if="list.length"
    >
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper-bundle.min.css"; // 所有的Swiper样式
import { Pagination, Navigation } from "swiper";

export default {
  name: "App",
  props: {
    list: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
