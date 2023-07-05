import Vue from "vue";
import VueRouter from "vue-router";
import CreatePostView from "../views/CreatePostView.vue";
import UpdatePostView from "../views/UpdatePostView.vue";
import ListPostsView from "../views/ListPostsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "listPosts",
    component: ListPostsView,
    alias: "/posts",
  },
  {
    path: "/posts/create",
    name: "createPost",
    component: CreatePostView,
  },
  {
    path: "/posts/:postId",
    name: "updatePost",
    component: UpdatePostView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
