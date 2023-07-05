import axios from "axios";

const createPost = async ({ title, description }) => {
  const response = await axios.post("http://localhost:3000/posts", {
    title,
    description,
  });

  return response.data;
};

const updatePost = async (postId, { title, description }) => {
  const response = await axios.put(`http://localhost:3000/posts/${postId}`, {
    title,
    description,
  });

  return response.data;
};

const listPosts = async () => {
  const response = await axios.get("http://localhost:3000/posts");

  return response.data;
};

const showPost = async (postId) => {
  const response = await axios.get(`http://localhost:3000/posts/${postId}`);

  return response.data;
};

export { createPost, listPosts, showPost, updatePost };
