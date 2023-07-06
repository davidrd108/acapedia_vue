<template>
  <ListPosts :server="secondServer" />
</template>

<script>
import ListPosts from "@/components/ListPosts.vue";
import { secondServer } from "@/api/config.js";

export default {
  data: function () {
    return {
      secondServer,
    };
  },
  name: "ListPostsViewV2",
  components: {
    ListPosts,
  },
};
</script>
