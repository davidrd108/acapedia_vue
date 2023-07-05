<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <code>{{ JSON.stringify(post, null, 2) }}</code>
        <router-link :to="{ name: 'updatePost', params: { postId: post.id } }"
          >Update post</router-link
        >
      </li>
    </ul>
    <router-link :to="{ name: 'createPost' }">Create post</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    this.listPosts();
  },
  methods: {
    ...mapActions(["listPosts"]),
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

<style lang="scss" scoped></style>
