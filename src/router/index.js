import Vue from "vue";
import VueRouter from "vue-router";
import CreatePostView from "../views/CreatePostView.vue";
import UpdatePostView from "../views/UpdatePostView.vue";
import ListPostsView from "../views/ListPostsView.vue";
import ListPostsViewV2 from "../views/ListPostsViewV2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "listPosts",
    component: ListPostsView,
    alias: "/posts",
  },
  {
    path: "/posts-v2",
    name: "listPostsV2",
    component: ListPostsViewV2,
    alias: "/posts-v2",
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
