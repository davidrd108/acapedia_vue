import { listCommentsByPost, remove } from "@/api/comment";

export default {
  state: {
    comments: [],
  },
  getters: {
    comments: (state) => {
      return state.comments;
    },
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    async listCommentsByPost({ commit }, postId) {
      let comments = await listCommentsByPost(postId);

      commit("setComments", comments);
    },

    async removeComment({ dispatch }, params) {
      await remove(params.commentId);

      dispatch("listCommentsByPost", params.postId);
    },
  },
};
