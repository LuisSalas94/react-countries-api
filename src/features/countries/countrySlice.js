import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//Country API
import countryAPI from "../../common/apis/linkAPI";

//Country Thunk Action
export const fetchAsyncCountries = createAsyncThunk(
	"countries/fetchAsyncCountries",
	async () => {
		const response = await countryAPI.get("/all");
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
