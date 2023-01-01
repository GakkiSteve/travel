<template>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alphabet></city-alphabet>
</template>

<script>
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
};
</script>

<style lang="stylus" scoped></style>
