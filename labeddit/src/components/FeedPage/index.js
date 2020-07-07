import React from "react";
import { useHistory } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";

const FeedPage = () => {
  const [posts, getPosts] = usePosts();
  const history = useHistory();

  const handlePostClick = (postId) => history.push(`posts/${postId}`);

  return (
    <div>
      <form>
        <input/>
        <button>Postar</button>
      </form>

      <Helmet>
        <title>Feed</title>
      </Helmet>
      Feed
      {posts.map((post) => (
        <p key={post.id} onClick={() => handlePostClick(post.id)}>
          {post.title}
        </p>
      ))}
    </div>
  );
};

export default FeedPage;
