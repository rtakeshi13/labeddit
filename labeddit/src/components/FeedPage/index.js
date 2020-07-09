import React from "react";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";
import PostCard from "../PostCard";

const FeedPage = () => {
  const [posts] = usePosts();

  return (
    <div>
      <Helmet>
        <title>Feed</title>
      </Helmet>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          postId={post.id}
          userName={post.username}
          title={post.title}
          text={post.text}
          commentsCount={post.commentsCount}
          votesCount={post.votesCount}
          userVoteDirection={post.userVoteDirection}
          feedpage
        />
      ))}
    </div>
  );
};

export default FeedPage;
