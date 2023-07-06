<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="post in cards" :key="post.id" :cols="3">
          <v-card @click="openDialog(post)">
            <v-img
              :src="post.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
            </v-img>
            <v-card-text>
              <div>
                <h4>{{ post.title }}</h4>
              </div>
              <div><b>Category: </b>{{ post.category }}</div>
              <div><b>Description: </b>{{ post.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text size="medium" color="surface-variant" variant="text"
                >{{
                  post.commentsCount == 1
                    ? "1 Comment"
                    : post.commentsCount > 1
                    ? post.commentsCount + " Comments"
                    : "No comments"
                }}
              </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["cards"],
  methods: {
    openDialog(post) {
      this.$emit("currentPost", post);
      this.$emit("open");
    },
  },
};
</script>
