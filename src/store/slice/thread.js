import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, HTTP_CLIENT } from "../../shared/exporter";
import NavigationService from "../../navigators/NavigationService";

export const threadReq = createAsyncThunk("threadReq", async (params) => {
  console.log("res", params);
  let result = await HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
  console.log("res2", result);
  return result;
});
export const threadSlice = createSlice({
  name: "Thread",
  initialState: { thread: [], isLoading: false },
  reducers: {
    thread: (state, { payload }) => {
      state.thread = payload;
    },
    removeThread(state) {
      state.thread = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(threadReq.fulfilled, (state, action) => {
      state.thread = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(threadReq.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(threadReq.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const { thread, removeThread } = threadSlice.actions;
export default threadSlice.reducer;
