import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Projects from "./Projects";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";

const App = () => {
	return (
		<Router>
			<GlobalStyles />
      <Banner />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        
			</Routes>
		</Router>
	);
};

export default App;
