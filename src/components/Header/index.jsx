import { Link } from "solid-app-router";
import { Header, Navigation } from "./styles";
const AppHeader = () => {
  return (
    <>
      <Header>
        <Navigation>
          <h3> Books management App</h3>
          <Link href="/" class="link" activeClass="active">
            Dashboard
          </Link>

          <Link href="/books" class="link" activeClass="active">
            Books List
          </Link>

          <Link href="/add" class="link" activeClass="active">
            Add Book
          </Link>
        </Navigation>
        <hr />
      </Header>
    </>
  );
};

export default AppHeader;
