//////////////////////////////////////////////////////////////////////
/// libs ///
import { createSlice } from "@reduxjs/toolkit";
//////////////////////////////////////////////////////////////////////
/// API utils ///
import { fetchCurrenciesAPI } from "../app/API";
//////////////////////////////////////////////////////////////////////
/// slice ///
const initialState = {
  currencies: [],
  current: {
    label: "",
    symbol: "",
  },
  loading: false,
  hasErrors: false,
};
const currenciesSlice = createSlice({
  name: "currenciesState",
  initialState,
  reducers: {
    getCurrencies: (state) => {
      state.loading = true;
    },
    getCurrenciesSuccess: (state, { payload }) => {
      state.currencies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCurrenciesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setCurrentCurrency: (state, { payload }) => {
      state.current = payload;
    },
  },
});
//////////////////////////////////////////////////////////////////////
/// actions ///
export const {
  getCurrencies,
  getCurrenciesSuccess,
  getCurrenciesFailure,
  setCurrentCurrency,
} = currenciesSlice.actions;
//////////////////////////////////////////////////////////////////////
/// fetchCurrencies thunk ///
export const fetchCurrencies = () => {
  return async (dispatch) => {
    dispatch(getCurrencies());
    try {
      const data = await fetchCurrenciesAPI();
      dispatch(getCurrenciesSuccess(data.currencies));
      dispatch(setCurrentCurrency(data.currencies[0]));
    } catch (error) {
      dispatch(getCurrenciesFailure());
    }
  };
};
//////////////////////////////////////////////////////////////////////
/// reducer ///
export default currenciesSlice.reducer;
//////////////////////////////////////////////////////////////////////
