import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencies } from "../API/currencies";

const initialState = {
  currencies: [],
  current: {},
  loading: false,
  hasErrors: false,
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    loadCurrencies: (state) => {
      state.loading = true;
    },
    getCurrenciesSuccess: (state, { payload }) => {
      state.loading = false;
      state.currencies = payload;
      state.current = payload[0];
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

export const {
  loadCurrencies,
  getCurrenciesSuccess,
  getCurrenciesFailure,
  setCurrentCurrency,
} = currenciesSlice.actions;

export const getCurrencies = () => {
  return async (dispatch) => {
    dispatch(loadCurrencies());
    try {
      const currencies = await fetchCurrencies();
      dispatch(getCurrenciesSuccess(currencies));
    } catch (error) {
      dispatch(getCurrenciesFailure());
    }
  };
};

export default currenciesSlice.reducer;
