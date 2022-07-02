///////////////////////////////////////////////////////////////
/// libs ///
import { createSlice } from "@reduxjs/toolkit";
///////////////////////////////////////////////////////////////
/// API utils ///
import { fetchCategoriesNames } from "../app/API";
///////////////////////////////////////////////////////////////
const initialState = {
  categories: [],
  current: "",
  loading: false,
  hasErrors: false,
};
const categoriesSlice = createSlice({
  name: "categoriesState",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCategoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setCurrentCatergory: (state, { payload }) => {
      state.current = payload;
    },
  },
});
///////////////////////////////////////////////////////////////
/// actions ///
export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
  setCurrentCatergory,
} = categoriesSlice.actions;
///////////////////////////////////////////////////////////////
/// async thunk ///
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const categories = await fetchCategoriesNames();
      dispatch(getCategoriesSuccess(categories));
      dispatch(setCurrentCatergory(categories[0].name));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
};
///////////////////////////////////////////////////////////////
export default categoriesSlice.reducer;
///////////////////////////////////////////////////////////////
