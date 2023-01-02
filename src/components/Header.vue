<template>
  <div class="header">
    <div class="header-left">
      <div>
        <i class="iconfont icon-fanhui back-icon"></i>
      </div>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
    </div>

    <router-link to="/city">
      <div class="header-right">
        {{ this.$store.state.city }}
        <i class="iconfont icon-xiajiantou"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String,
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
          text-align: center
          font-size: .4rem
          margin-left: .2rem
    .header-input
        flex: 1
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        margin-bottom: .12rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc

    .header-right
        width: 1.24rem
        float: right
        text-align: center
        color:#fff
</style>
