import { CssBaseline } from "@mui/material";
import AboutUs from "./components/AboutUs";
import Advice from "./components/Advice";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hotels from "./components/Hotels";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Destinations />
      <Hotels />
      <Advice />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
