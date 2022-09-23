import React from "react";
import Inputs from "./Inputs";
import Country from "./Country";

const CountryList = () => {
	return (
		<div className="bg-slate-50 h-screen pt-8">
			<div className="max-width">
				<Inputs />
			</div>
			<Country />
		</div>
	);
};

export default CountryList;
