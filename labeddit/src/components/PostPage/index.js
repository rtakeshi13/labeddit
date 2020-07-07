import React from "react";
import { useHistory, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail";
import PostCard from "../PostCard/index"

const PostPage = () => {
  const { postId } = useParams();
  const [post] = usePostDetail(postId);
  const history = useHistory();

  return post ? <PostCard
                    postId={post.id}
                    userName={post.username}
                    title={post.title}
                    text={post.text}
                    commentsCount={post.commentsCount}
                
                />
                : null;
};

export default PostPage;
