import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Metronome from "./projects/Metronome/Metronome";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<About />}
				/>
				<Route path="portfolio">
					<Route
						index
						element={<Portfolio />}
					/>
				</Route>
			</Route>
			<Route
				path="portfolio/metronome"
				element={<Metronome />}
			/>
		</Routes>
	);
}

export default App;
