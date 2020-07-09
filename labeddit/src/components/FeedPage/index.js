import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import usePosts from "../../hooks/usePosts";
import { Helmet } from "react-helmet-async";
import PostCard from "../PostCard";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { createPost } from "../../functions/axios";
import { FormControlLabel } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const FormContainer = styled.form`
  display: grid;
  justify-items: center;
  margin-top: 20px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const FeedPage = () => {
  const [posts, getPosts, resetForm] = usePosts();
  const history = useHistory();
  const classes = useStyles();
  const [form, handleFormChange] = useForm({ text: "", title: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const success = await createPost(form);
    if (success) {
      resetForm();
      getPosts();
      alert("Post criado com sucesso");
    } else {
      alert("Erro ao criar Post");
    }
  };
  console.log("oi");
  return posts.length > 0 ? (
    <div>
      <Helmet>
        <title>LabEddit</title>
      </Helmet>

      <FormContainer onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Escrever post"
          type="text"
          name="text"
          onChange={handleFormChange}
        />

        <TextField
          value={form.title}
          id="outlined-basic"
          variant="outlined"
          placeholder="Título"
          type="text"
          name="title"
          onChange={handleFormChange}
        />

        <Button type="submit" variant="contained">
          Postar
        </Button>
      </FormContainer>

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
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default FeedPage;
