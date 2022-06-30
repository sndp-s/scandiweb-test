///////////////////////////////////////////////////////////////
/// libs ///
import { createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";
///////////////////////////////////////////////////////////////
/// API ///
import { URI } from "../app/API";
///////////////////////////////////////////////////////////////
/// data ////
const initialState = {
  categories: [],
  loading: false,
  hasErrors: false,
};
const fetchCategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;
///////////////////////////////////////////////////////////////
/// createSlice ///
const categoriesSlice = createSlice({
  name: "categories",
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
  },
});
///////////////////////////////////////////////////////////////
/// actions ///
export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categoriesSlice.actions;
///////////////////////////////////////////////////////////////
/// async thunk ///
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const response = await request(URI, fetchCategoriesQuery);
      dispatch(getCategoriesSuccess(response));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
};

///////////////////////////////////////////////////////////////
export default categoriesSlice.reducer;
///////////////////////////////////////////////////////////////