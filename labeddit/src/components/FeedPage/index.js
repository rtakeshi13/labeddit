import React from "react";
import { useHistory } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";

const FeedPage = () => {
  const [posts, getPosts] = usePosts();

  return (
    <div>
      <Helmet>
        <title>Feed</title>
      </Helmet>
      Feed
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default FeedPage;
