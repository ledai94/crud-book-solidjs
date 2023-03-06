import { useNavigate } from "solid-app-router";
import { createBrowserHistory } from "history";
import { booksList } from "../../store";
import { Container, Title, View, Details, ButtonContainer } from "./styles";
const Book = ({ id, bookname, author, price, quantity, date }) => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const onEdit = () => {
    history.push(`/edit/${id}`);
    navigate(`/edit/${id}`);
  };

  const onRemove = () => {
    booksList.delete(id);
  };
  return (
    <Container>
      <Title>{bookname}</Title>
      <View>
        <Details>Author: {author}</Details>
        <Details>price: {price}</Details>
        <Details>quantity: {quantity}</Details>
        <Details>date: {new Date(date).toDateString()}</Details>
      </View>
      <ButtonContainer>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onRemove}>Delete</button>
      </ButtonContainer>
    </Container>
  );
};

export default Book;
