import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postList: [],
  loading: false,
  error: false,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (thunkAPI, { rejectWithValue }) => {
    const API_URL = "https://jsonplaceholder.typicode.com";
    try {
      const { data } = await axios.get(`${API_URL}/posts`);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.postList = payload;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default postSlice.reducer;
