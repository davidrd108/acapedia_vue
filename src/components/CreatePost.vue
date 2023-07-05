<template>
  <v-form>
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea
      name="description"
      label="Description"
      v-model="description"
    ></v-textarea>

    <v-btn :to="{ name: 'listPosts' }">cancel</v-btn>
    <v-btn @click="submit" class="ml-2" color="primary">submit</v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(["createPost"]),

    async submit() {
      await this.createPost({
        title: this.title,
        description: this.description,
        category: "money",
      });
      this.$router.push({ name: "listPosts" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
