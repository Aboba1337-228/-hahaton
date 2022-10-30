import { configureStore } from "@reduxjs/toolkit";
import xlsxSlice from "../features/xlsxSlice";

export default  configureStore({
  reducer: { xlsx: xlsxSlice },
});
