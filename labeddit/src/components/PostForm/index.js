import React, { useContext } from "react";
import useForm from "../../hooks/useForm";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

import { createPost } from "../../functions/axios";

import Container from "@material-ui/core/Container";

import { FormContainer, Submit, TextInput } from "./styles";

const PostForm = (props) => {
  const { getPosts } = props;
  const [form, handleFormChange, resetForm] = useForm({ text: "", title: "" });
  const [selectedLanguage] = useContext(LanguageContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const success = await createPost(form);
    if (success) {
      resetForm();
      getPosts();
    } else {
      alert(languages[selectedLanguage].postErrorAlert);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <FormContainer onSubmit={handleFormSubmit}>
        <TextInput
          required
          value={form.title}
          variant="outlined"
          label={languages[selectedLanguage].postTitlePlaceholder}
          type="text"
          name="title"
          onChange={handleFormChange}
          fullWidth
        />
        <TextInput
          required
          value={form.text}
          variant="outlined"
          label={languages[selectedLanguage].postTextPlaceholder}
          type="text"
          name="text"
          onChange={handleFormChange}
          multiline
          rows={5}
          fullWidth
        />
        <Submit type="submit" variant="contained">
          {languages[selectedLanguage].postButton}
        </Submit>
      </FormContainer>
    </Container>
  );
};

export default PostForm;
