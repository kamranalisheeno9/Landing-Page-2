import "./App.css";
import { Container } from "react-bootstrap";
import PageOne from "./Pages/PageOne";
function App() {
  return (
    <div className="App">
      <Container fluid>
        <PageOne />
      </Container>
    </div>
  );
}

export default App;
