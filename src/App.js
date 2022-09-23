import "./App.css";
//Components
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
//React Router
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<CountryList />} />
				<Route path="/:alpha3Code" element={<CountryDetails />} />
			</Routes>
		</div>
	);
}

export default App;
