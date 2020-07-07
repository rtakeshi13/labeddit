import React from "react";
import { useHistory, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail";

const PostPage = () => {
  const { postId } = useParams();
  const [post] = usePostDetail(postId);
  const history = useHistory();

  return post ? <div>{post.id}</div> : null;
};

export default PostPage;
