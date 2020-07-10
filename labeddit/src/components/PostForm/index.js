import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { createPost } from "../../functions/axios";
import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  justify-items: center;
  width: 50%;
  margin: 20px auto 20px auto;
`;

const PostForm = (props) => {
  const { getPosts } = props;
  const [form, handleFormChange, resetForm] = useForm({ text: "", title: "" });

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

  return (
    <div>
      <FormContainer onSubmit={handleFormSubmit}>
        <TextField
          required
          autoFocus
          value={form.title}
          variant="outlined"
          label="Título"
          type="text"
          name="title"
          onChange={handleFormChange}
          fullWidth
        />
        <TextField
          required
          value={form.text}
          variant="outlined"
          label="Escrever post"
          type="text"
          name="text"
          onChange={handleFormChange}
          multiline
          rows={5}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Postar
        </Button>
      </FormContainer>
    </div>
  );
};

export default PostForm;
