import React, { useContext } from "react";
import useForm from "../../hooks/useForm";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

import { createComment } from "../../functions/axios";

import Container from "@material-ui/core/Container";

import { FormContainer, Submit, TextInput } from "./styles";

const CommentForm = (props) => {
  const { postId, getPostDetails } = props;
  const [form, handleFormChange, resetForm] = useForm({ text: "" });
  const [selectedLanguage] = useContext(LanguageContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const success = await createComment(postId, form);
    if (success) {
      resetForm();
      getPostDetails(postId);
    } else {
      alert(languages[selectedLanguage].postErrorAlert);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <FormContainer onSubmit={handleFormSubmit}>
        <TextInput
          required
          value={form.text}
          variant="outlined"
          label={languages[selectedLanguage].commentTextPlaceholder}
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

export default CommentForm;
