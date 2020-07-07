import React from "react";
import { useHistory, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail";
import PostCard from "../PostCard/index"
import CommentCard from "../CommentCard/index"

const PostPage = () => {
  const { postId } = useParams();
  const [post] = usePostDetail(postId);
  const history = useHistory();

  return post ? (
                <div>
                    <PostCard
                        postId={post.id}
                        userName={post.username}
                        title={post.title}
                        text={post.text}
                        commentsCount={post.commentsCount}
                        votesCount={post.votesCount}
                    />
                    {post.comments.map(comment => {
                        return (
                        <CommentCard
                            userName={comment.username}
                            text={comment.text}
                            votesCount={comment.votesCount}
                        
                        />
                        )
                        
                    })}
                
                
                </div>
                ) : null;
};

export default PostPage;
