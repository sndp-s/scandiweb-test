///////////////////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";
///////////////////////////////////////////////////////////////
export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};
///////////////////////////////////////////////////////////////
/* a slice for posts with three reducers */
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErros = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});
///////////////////////////////////////////////////////////////
/* three action generated from the slice */
export const { getPosts, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;
///////////////////////////////////////////////////////////////
// Async thunk action
export function fetchPosts() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
///////////////////////////////////////////////////////////////
/* The reducer */
export default postsSlice.reducer;
///////////////////////////////////////////////////////////////
