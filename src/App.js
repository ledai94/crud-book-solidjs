import { Routes, Route } from "solid-app-router";
import { lazy } from "solid-js";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Header from "./components/Header";
import BooksContext from "./context/BooksContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import "./App.css";

const EditForm = lazy(() => import("./components/EditForm"));
const App = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <div class="App">
      <div>
        <Header />
        <div>
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/books" element={<BooksList />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditForm />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
