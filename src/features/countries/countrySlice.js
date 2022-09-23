import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//URL
const baseURL = "https://restcountries.com/v2/all";

//Country Thunk Action
export const fetchAsyncCountries = createAsyncThunk(
	"countries/fetchAsyncCountries",
	async () => {
		const response = await axios(baseURL);
		return response.data;
	}
);

//Initial State
const initialState = {
	countries: [],
};

//Country Slice
const countrySlice = createSlice({
	name: "countries",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncCountries.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched countries");
			return {
				...state,
				countries: payload,
			};
		},
	},
});

export const { addCountries } = countrySlice.actions;
export default countrySlice.reducer;
