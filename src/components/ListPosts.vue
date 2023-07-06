<template>
  <div>
    <v-text-field
      @input="searchPosts()"
      v-model="title"
      label="Search by title"
    ></v-text-field>
    <v-select
      label="Category"
      v-model="category"
      @input="searchPosts()"
      :items="categories"
    ></v-select>
    <PostCard
      :cards="posts"
      @open="dialog = true"
      @currentPost="setCurrentPost"
    />
    <PostDetails :post="currentPost" :dialog="dialog" @close="dialog = false" />
    <div class="text-center">
      <v-pagination
        v-model="page"
        @change="searchPosts()"
        :length="totalPost"
        rounded="circle"
      ></v-pagination>
    </div>
    <router-link :to="{ name: 'createPost' }">Create post</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostCard from "@/components/PostCard.vue";
import PostDetails from "@/components/PostDetails.vue";
import { defaultServer } from "@/api/config.js";
import axios from "axios";

export default {
  props: ["server"],
  components: {
    PostCard,
    PostDetails,
  },
  data: function () {
    return {
      title: "",
      page: 1,
      category: "All",
      categories: ["All", "tech", "code", "cars", "money"],
      dialog: false,
      currentPost: null,
      totalPost: 0,
    };
  },
  mounted() {
    axios.defaults.baseURL = this.server ? this.server : defaultServer;
    this.listPosts();
  },
  methods: {
    ...mapActions(["listPosts"]),
    searchPosts() {
      this.listPosts({
        page: this.page,
        search: this.title.length > 3 ? this.title : null,
        category: this.category != "All" ? this.category : null,
      });
      this.totalPost = Math.ceil(this.posts.length / 10);
    },
    setCurrentPost(post) {
      this.currentPost = post;
    },
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

<style lang="scss" scoped></style>
