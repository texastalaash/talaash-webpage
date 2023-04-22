import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Floatingshapes from "./components/FloatingShapes/Floatingshapes";
import UnderConstruction from "./components/Underconstruction/UnderConstruction";

function App() {
	return (
		<Router>
			<div className="App">
				{/* <Navbar /> */}
				<UnderConstruction />
				{/* <Section /> */}
				{/* <Footer /> */}
				{/* <Floatingshapes /> */}
			</div>
		</Router>
	);
}

export default App;
