import { styled } from "solid-styled-components";

export const Container = styled("div")`
  width: 350px;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 15px;
  margin: 20px;
`;

export const Title = styled("h3")`
  font-size: 1.5rem;
`;

export const View = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Details = styled("div")`
  display: flex;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
`;
