import axios from "axios";

const createPost = async ({ title, description }) => {
  const response = await axios.post("posts", {
    title,
    description,
  });

  return response.data;
};

const updatePost = async (postId, { title, description }) => {
  const response = await axios.put(`posts/${postId}`, {
    title,
    description,
  });

  return response.data;
};

const listPosts = async (page = 1, search = null, category = null) => {
  const params = [];

  if (search) {
    params.push(`title=${search}`);
  }

  if (category) {
    params.push(`category=${category}`);
  }

  const response = await axios.get(
    `posts?_embed=comments&_page=${page}${
      params.length > 0 ? "&" + params.join("&") : ""
    }`
  );

  return response.data;
};

const showPost = async (postId) => {
  const response = await axios.get(`posts/${postId}`);

  return response.data;
};

export { createPost, listPosts, showPost, updatePost };
