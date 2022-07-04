/// libs ///
import { createSlice } from "@reduxjs/toolkit";

/// API utils ///
import { fetchCategoriesAPI } from "../app/API";

/// createSlice ///
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
      state.loading = false;
      state.categories = payload;
    },
    getCategoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setCurrentCategory: (state, { payload }) => {
      state.current = payload;
    },
  },
});

/// actions ///
export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
  setCurrentCategory,
} = categoriesSlice.actions;

/// thunk ///
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const data = await fetchCategoriesAPI();
      dispatch(getCategoriesSuccess(data.categories));
      const firstCategoryName = data.categories[0].name;
      dispatch(setCurrentCategory(firstCategoryName));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
};

/// slice reducer ///
export default categoriesSlice.reducer;
