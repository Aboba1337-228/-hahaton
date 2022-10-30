import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../store/axios";

export const fetchXLSX = createAsyncThunk(
  "xlsx/fetchXLSX",
  async function (options,{ rejectWithValue }) {
    try {
      const date = axios.post("api/v1/");
      return date;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchSendingXLSX = createAsyncThunk(
  "xlsx/fetchSendingXLSX",
  async function (options,{ rejectWithValue }) {
    try {
      const date = axios.post("api/v2/",options);
      return date;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const xlsxSlice = createSlice({
  name: "xlsxSlice",
  initialState: { date: [], status: null },
  reducers: {
    getData: (state, actions) => {
      state.date = actions.payload;
    },
  },
  extraReducers: {
    [fetchXLSX.pending]: (state) => {
      state.date = null;
      state.status = "pending";
    },
    [fetchXLSX.fulfilled]: (state, actions) => {
      state.date = actions.payload;
      state.status = "fulfilled";
    },
    [fetchXLSX.rejected]: (state, actions) => {
      state.date = null;
      state.status = "rejected";
    },
    [fetchSendingXLSX.fulfilled]: (state, actions) => {
      state.status = "Отправлено";
    },
  },
});

export const { getData } = xlsxSlice.actions;

export default xlsxSlice.reducer;
