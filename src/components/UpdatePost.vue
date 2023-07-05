<template>
  <v-form v-if="currentPost">
    <v-text-field
      v-model="currentPost.title"
      label="Title"
      required
    ></v-text-field>
    <v-textarea
      name="description"
      label="Description"
      v-model="currentPost.description"
    ></v-textarea>

    <v-btn :to="{ name: 'listPosts' }">cancel</v-btn>
    <v-btn @click="submit" class="ml-2" color="primary">submit</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  mounted() {
    this.showPost(this.$route.params.postId);
  },
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost;
    },
  },
  methods: {
    ...mapActions(["showPost"]),

    submit() {
      axios.put(`http://localhost:3000/posts/${this.$route.params.postId}`, {
        title: this.currentPost.title,
        description: this.currentPost.description,
      });
      this.$router.push({ name: "listPosts" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
