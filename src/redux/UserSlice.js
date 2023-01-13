import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "./config/config";

export const getPost = createAsyncThunk("get/getPost", async () => {
  return instance
    .get()
    .then((res) => {
      console.log("success", res.data.data);
      return res.data.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
});

export const postData = createAsyncThunk(
  "post/PostData",
  async ({ name, age, city }) => {
    const body = {
      name,
      age,
      city,
    };
    const data = instance
      .post("/post", body)
      .then((res) => {
        console.log("success", res.data);
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    error: "",
    success: "",
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {},
    [getPost.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postData.pending]: (state, action) => {},
    [postData.fulfilled]: (state, action) => {
      state.success = action.payload;
    },
    [postData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
