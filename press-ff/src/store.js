import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice"
import { sendMyData } from "./serverUtils/utils";

const saveData = (store) => (next) => (action) => {
  let result = next(action)
  if (action.payload.sendData) {
    sendMyData(store.getState().myData)
  }
  return result
}

export default configureStore({
  reducer: {
    myData: dataReducer,
  },
  middleware: [saveData]
})