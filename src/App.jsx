import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Floatingshapes from "./components/FloatingShapes/Floatingshapes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Section />
        <Footer />
        <Floatingshapes/>
      </div>
    </Router>
  );
}

export default App;
