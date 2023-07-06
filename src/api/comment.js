import axios from "axios";

const listCommentsByPost = async (postId) => {
  const response = await axios.get("comments?postId=" + postId);

  return response.data;
};

const remove = async (commentId) => {
  const response = await axios.delete("comments/" + commentId);

  return response.data;
};

export { listCommentsByPost, remove };
