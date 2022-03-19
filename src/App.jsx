import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Section />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
