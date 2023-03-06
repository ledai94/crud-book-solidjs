import { useParams, useNavigate } from "solid-app-router";
import { booksList } from "../../store";
import BooksForm from "../BooksForm";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookToEdit = booksList.books.find((book) => book.id === id);
  const handleSubmit = (book) => {
    book["id"] = id;
    booksList.editBook(book);
    navigate("/books");
  };
  return (
    <div>
      <BooksForm
        book={bookToEdit}
        handleSubmit={(book) => handleSubmit(book)}
      />
    </div>
  );
};

export default EditForm;
