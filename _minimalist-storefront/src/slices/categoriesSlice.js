import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../API/categories";

const initialState = {
  categories: [],
  loading: false,
  hasErrors: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    loadCategories: (state) => {
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
  },
});

export const { loadCategories, getCategoriesSuccess, getCategoriesFailure } =
  categoriesSlice.actions;

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(loadCategories());
    try {
      const categories = await fetchCategories();
      dispatch(getCategoriesSuccess(categories));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
};

export default categoriesSlice.reducer;
