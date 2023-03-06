import _ from "lodash";
import { booksList } from "../../store";
import Book from "../Book";
import { Container } from "./styles";
const BooksList = () => {
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      <Container>
        {!_.isEmpty(booksList.books) ? (
          booksList.books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p>No books added till now</p>
        )}
      </Container>
    </>
  );
};

export default BooksList;
