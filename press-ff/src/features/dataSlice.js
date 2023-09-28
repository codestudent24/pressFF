import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "my-Login",
  name:"my-Name",
  weight: "70",
  height: "170",
  now: "24.09.2023"
}

export const dataSlice = createSlice({
  name: 'myData',
  initialState,
  reducers: {
    updateWeight(state, action) {
      state.weight = action.payload
    },
    logData(state) {
      console.log(state)
    },
    writeData(state, action) {
      const { login, name, weight, height, now } = action
      if (login) state.login = login
      if (name) state.name = name
      if (weight) state.weight = weight
      if (height) state.height = height
      if (now) state.now = now
    }
  },
})

export const { updateWeight, logData, writeData } = dataSlice.actions
export default dataSlice.reducer