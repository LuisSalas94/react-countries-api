import React from "react";
import Inputs from "./Inputs";
import Country from "./Country";

const CountryList = () => {
	return (
		<div className="bg-slate-50 h-screen pt-8">
			<div className="max-width">
				<Inputs />
			</div>
			<div className="mt-10 bg-slate-50  grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<Country />
			</div>
		</div>
	);
};

export default CountryList;
