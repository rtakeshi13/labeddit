import styled from "styled-components";

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 50vw;
  input {
    width: 100%;
  }
  button {
    display: block;
  }
`;
