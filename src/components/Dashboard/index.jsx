import { booksList } from "../../store";
import { Container, Card, Title, Count } from "./styles";
const Dashboard = () => {
  return (
    <Container>
      <Card>
        <Title>Books Count</Title>
        <Count>{booksList.count}</Count>
      </Card>
      <Card>
        <Title>Authors Count</Title>
        <Count>{booksList.authorsCount}</Count>
      </Card>
    </Container>
  );
};

export default Dashboard;
