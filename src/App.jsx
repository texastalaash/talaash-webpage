import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Section />
      </div>
    </Router>
  );
}

export default App;
