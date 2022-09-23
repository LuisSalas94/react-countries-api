import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCountries } from "../features/countries/countrySlice";

const Country = () => {
	const data = useSelector((state) => state.countries.countries);
	console.log("data", data);

	const dispatch = useDispatch();
	useEffect(() => {
		try {
			dispatch(fetchAsyncCountries());
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className="cursor-pointer w-72 bg-white rounded-lg border border-gray-100 shadow-lg">
			{data &&
				data.map((country) => (
					<div key={country.alpha2Code}>
						<img
							src={country.flag}
							alt="Flag"
							className="rounded-t-lg shadow-sm"
						/>
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
								{country.name}
							</h5>
							<p className="pt-2">
								Population:{" "}
								<span className="text-zinc-400">{country.population}</span>
							</p>
							<p className="py-2">
								Region: <span className="text-zinc-400">{country.region}</span>
							</p>
							<p className="pb-5">
								Capital:{" "}
								<span className="text-zinc-400">{country.capital}</span>
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Country;
