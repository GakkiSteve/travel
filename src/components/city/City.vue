<template>
  <city-header></city-header>
  <city-search></city-search>
  <city-list :cities="cities" :hot="hotCities"></city-list>
  <city-alphabet :cities="cities"></city-alphabet>
</template>

<script>
import axios from "axios";
import CityHeader from "./CityHeader";
import CitySearch from "./Search";
import CityList from "./List";
import CityAlphabet from "./Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/mock/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="stylus" scoped></style>
