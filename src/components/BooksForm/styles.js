import { styled } from "solid-styled-components";

export const BooksContainer = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 350px;
  margin: auto;
`;

export const StyledForm = styled("form")`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Field = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled("label")`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Control = styled("div")``;

export const ErrorNote = styled("h3")`
  color: red;
`;
