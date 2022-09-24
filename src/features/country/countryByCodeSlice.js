import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch Country By Code Thunk Action
export const fetchAsyncCountryByCode = createAsyncThunk(
	"countries/fetchAsyncCountryByCode",
	async (code) => {
		const response = await axios.get(
			`https://restcountries.com/v2/alpha/${code}`
		);
		return response.data;
	}
);

//Initial State
const initialState = {
	country: [],
};

//Country Slice
const countryByCodeSlice = createSlice({
	name: "countryByCode",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncCountryByCode.fulfilled]: (state, { payload }) => {
			console.log("Country by code fetched successfully");
			return {
				...state,
				country: payload,
			};
		},
	},
});

export const { addCountryByCode } = countryByCodeSlice.actions;
export default countryByCodeSlice.reducer;
