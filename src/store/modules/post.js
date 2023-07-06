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
    async listPosts({ commit }, filters) {
      let posts = await listPosts(
        filters && filters.page ? filters.page : null,
        filters && filters.search ? filters.search : null,
        filters && filters.category ? filters.category : null
      );

      posts = posts.map((post) => {
        post.commentsCount = post.comments ? post.comments.length : 0;
        return post;
      });

      commit("setPosts", posts);
    },

    async showPost({ commit }, postId) {
      const currentPost = await showPost(postId);

      commit("setCurrentPost", currentPost);
    },
  },
};
