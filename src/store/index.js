import { createStore } from "vuex";

export default createStore({
  state: {
    city: localStorage.city || "北京",
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
    },
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit("changeCity", city);
      localStorage.city = city;
    },
  },
  modules: {},
});
