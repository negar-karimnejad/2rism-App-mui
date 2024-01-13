import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Hotels from "./components/Hotels";
import Advice from "./components/Advice";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Destinations />
        <Hotels />
        <Advice />
      </Container>
    </>
  );
}

export default App;
