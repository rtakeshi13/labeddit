import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const FormContainer = styled.form`
  display: grid;
  justify-items: center;
  width: 50%;
  margin: 20px auto 20px auto;
`;

export const Submit = styled(Button)``;

export const TextInput = styled(TextField)`
  margin-bottom: 10px;
`;
