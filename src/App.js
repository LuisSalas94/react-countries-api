import "./App.css";
//Components
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<CountryList />} />
			</Routes>
		</div>
	);
}

export default App;
