import BooksForm from "../BooksForm";
import { booksList } from "../../store";
import { useNavigate } from "solid-app-router";

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (book) => {
    booksList.addBook(book);
    navigate("/books");
  };
  return (
    <>
      <BooksForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddBook;
