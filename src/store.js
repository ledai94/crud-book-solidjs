import { createMutable } from "solid-js/store";
const list = [
  {
    id: "06135379-bdae-46a5-985b-8e62e475ed65",
    bookname: "9",
    author: "9",
    quantity: "9",
  },
  {
    id: "9a11bc9f-bcd6-4780-9c2e-5818c11a8877",
    bookname: "9",
    author: "9",
    quantity: "99",
    price: "9",
  },
];

// const newlist = list.map((el) => el);
export const booksList = createMutable({
  books: JSON.parse(window.localStorage.getItem("booksList") ?? "[]"),
  // books: JSON.parse(
  //   window.localStorage.getItem("booksList") ??
  //     `[
  //     {
  //       author: "1",
  //       bookname: "1",
  //       id: "d8e79f7c-9764-4b2d-b785-09a77f7e8c26",
  //       date: "27/10/2021",
  //       price: "1",
  //       quantity: "1",
  //     },
  //   ]`
  // ),
  // books: newlist.toString(),

  get count() {
    return this.books.length;
  },
  get authorsCount() {
    let result = this.books
      .map((book) => book.author)
      .filter((value, index, self) => self.indexOf(value) === index);
    return result.length;
  },
  addBook(book) {
    this.books.push(book);
    window.localStorage.setItem("books", JSON.stringify(this.books));
  },
  editBook(book) {
    console.log("jsr book id", book);
    console.log("hhr", this.books);
    const index = this.books.find((b) => b.id === book.id);
    console.log("index", index);
    console.log("print", this.books[index.id]);
    const myindex = this.books.findIndex((b) => b.id === index.id);
    console.log("myindex", myindex);
    this.books[myindex] = book;
    window.localStorage.setItem("books", JSON.stringify(this.books));
  },

  delete(id) {
    let newlist = this.books.filter((b) => b.id !== id);
    console.log("new list", newlist);
    this.books = newlist;
    window.localStorage.setItem("books", JSON.stringify(this.books));
  },
  deleteAll() {
    this.books = [];
    window.localStorage.setItem("books", JSON.stringify(this.books));
  },
});
