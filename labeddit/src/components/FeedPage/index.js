import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";
import { createPost } from '../../functions/axios'


const FeedPage = () => {
  const [posts, getPosts] = usePosts();
  const history = useHistory();


  const [form, handleFormChange] = useForm({ text: "", title: "" });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await createPost(form);
        if (response.token) {
          localStorage.setItem("labeddit", JSON.stringify(response));
          history.push("/posts");
        } else {
          window.alert(response.message);
        }
    };


  const handlePostClick = (postId) => history.push(`posts/${postId}`);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
        placeholder="Escrever post"
        type="text"
        name="text"
        onChange={handleFormChange}
        />
        
        <input
        placeholder="Título"
        type="text"
        name="title"
        onChange={handleFormChange}
        />
        <button onClick={handlePostClick}>Postar</button>
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
