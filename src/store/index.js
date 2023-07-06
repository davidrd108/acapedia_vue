import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import post from "@/store/modules/post";
import comment from "@/store/modules/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    post,
    comment,
  },
  plugins: [createLogger()],
});
