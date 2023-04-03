
import "./App.css";
import HeaderComp from "./components/Header";
import WelcomeComp from "./components/Welcome";
import FooterComp from "./components/Footer";
import SignComp from "./components/signForm";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div  className="App">
      <div className="header_body">
        <HeaderComp />
        <br />

        <br />
        <WelcomeComp />
      </div>
      <Container  className="sign">
        <SignComp />
      </Container>
      <div className="footer">
        <FooterComp />
      </div>
    </div>
  );
}

export default App;
