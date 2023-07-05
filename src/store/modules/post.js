import { createPost, updatePost, listPosts, showPost } from "@/api/post";

export default {
  state: {
    posts: [],
    currentPost: null,
  },
  getters: {
    posts: (state) => {
      return state.posts;
    },
    currentPost: (state) => {
      return state.currentPost;
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCurrentPost(state, currentPost) {
      state.currentPost = currentPost;
    },
  },
  actions: {
    createPost(_ctx, { title, description }) {
      const createParams = {
        title,
        description,
      };

      createPost(createParams);
    },
    updatePost(_ctx, { postId, updateParams }) {
      updatePost(postId, updateParams);
    },
    async listPosts({ commit }) {
      const posts = await listPosts();

      commit("setPosts", posts);
    },
    async showPost({ commit }, postId) {
      const currentPost = await showPost(postId);

      commit("setCurrentPost", currentPost);
    },
  },
};
