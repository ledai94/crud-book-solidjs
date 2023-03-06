import { createSignal } from "solid-js";
import { v4 as uuidv4 } from "uuid";
import {
  BooksContainer,
  StyledForm,
  Field,
  Label,
  Control,
  ErrorNote,
} from "./styles";

const initialValue = {
  bookname: "",
  author: "",
  quantity: "",
  price: "",
  date: "",
};
const Booksform = (props) => {
  const [book, setBook] = createSignal(
    !props.book
      ? initialValue
      : {
          bookname: props.book.bookname,
          author: props.book.author,
          quantity: props.book.quantity,
          price: props.book.price,
          date: props.book.date,
        }
  );
  console.log("book", book());
  const [error, setError] = createSignal("");
  const { bookname, author, quantity, price, date } = book();

  const handleinputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("book", book());

    const values = [
      book().bookname,
      book().author,
      book().quantity,
      book().price,
    ];
    console.log("values", values);
    let errorMsg = "";
    const allFields = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });
    const [bookname, author, quantity, price] = values;

    if (allFields) {
      const my_book = {
        id: uuidv4(),
        bookname,
        author,
        quantity,
        price,
        date: new Date(),
      };
      console.log("book", my_book);
      props.handleSubmit(my_book);
    } else {
      errorMsg = "Please fill out all the fields";
    }
    setError(errorMsg);
    console.log("error", error());
  };

  return (
    <BooksContainer>
      <h2>Books form</h2>
      {error().length > 0 && <ErrorNote>{error()}</ErrorNote>}
      <StyledForm onSubmit={handleSubmit}>
        <Field>
          <Label>Name*</Label>
          <Control>
            <input
              name="bookname"
              value={bookname}
              onChange={handleinputChange}
            />
          </Control>
        </Field>
        <br />
        <Field>
          <Label>Author*</Label>
          <Control>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleinputChange}
            />
          </Control>
        </Field>
        <br />
        <Field>
          <Label>Quantity*</Label>
          <Control>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={handleinputChange}
            />
          </Control>
        </Field>
        <br />
        <Field>
          <Label>Price*</Label>
          <Control>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleinputChange}
            />
          </Control>
        </Field>
        <br />
        <Field>
          <Control>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Control>
        </Field>
      </StyledForm>
    </BooksContainer>
  );
};

export default Booksform;
