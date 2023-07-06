<template>
  <v-dialog :value="dialog" activator="parent" width="auto">
    <v-card v-if="post != null">
      <v-card-title>
        <span class="headline"><b>Title: </b>{{ post ? post.title : "" }}</span>
      </v-card-title>
      <v-card-text>
        <span><b>Id: </b>{{ post ? post.id : "" }}</span>
      </v-card-text>
      <v-card-text>
        <span><b>description: </b>{{ post ? post.description : "" }}</span>
      </v-card-text>
      <v-card-text>
        <span><b>Category: </b>{{ post ? post.category : "" }}</span>
      </v-card-text>
      <v-card-text v-for="comment in post.comments" :key="comment.id">
        <code>{{ JSON.stringify(comment, null, 2) }}</code>
        <span
          @click="
            removeComment({
              commentId: comment.id,
              postId: currentPost.id,
            })
          "
          ><b>remove</b></span
        >
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="closeDialog">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["post", "dialog"],
  data: function () {
    return {
      showDialog: this.dialog,
    };
  },
  methods: {
    ...mapActions(["listCommentsByPost", "removeComment"]),
    openComments(post) {
      this.currentPost = post;
      this.listCommentsByPost(post.id);
    },
    closeDialog() {
      this.$emit("close");
    },
  },
  computed: {
    ...mapGetters(["comments"]),
  },
};
</script>
