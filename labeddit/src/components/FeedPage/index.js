import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";
import { createPost } from '../../functions/axios'
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/*        */

const FormContainer = styled.form`
    display: grid;
    justify-items: center;
    margin-top: 20px;
    
`

const Post = styled.div`
    margin-top: 20px;
    margin-left: 850px;
`

const InputPost = styled.input`
    width: 200px;
    height: 100px;
`
const InputTitle = styled.input`
    width: 200px;

`

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
    <Container>
      
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <p>
              <TextField id="outlined-basic" variant="outlined"
              placeholder="Escrever post"
              type="text"
              name="text"
              onChange={handleFormChange}
              />
            </p>
            
            <p>
              <TextField id="outlined-basic" variant="outlined"
              placeholder="Título"
              type="text"
              name="title"
              onChange={handleFormChange}
              />
            </p>
            
            <p>
              <Button variant="contained" type="submit" onClick={handlePostClick}>Postar</Button>
            </p>
          </FormContainer>
          
        </form>

        <Post>
          <Helmet>
          <title>Feed</title>
          </Helmet>
          Feed
          {posts.map((post) => (
          <p key={post.id} onClick={() => handlePostClick(post.id)}>
            {post.title}
          </p>
          ))}
        </Post>
      
      
    </Container>
  );
};

export default FeedPage;
