import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "my-Login",
  name:"my-Name",
  weight: [
    {
      date: "24.09.2023",
      value: "90"
    }
  ],
  "sport": {
    benchPress: [
      {
        date: "24.09.2023",
        weight: "100 kg",
        count: "10"
      }
    ],
    pullUps : [
      {
        date: "24.09.2023",
        weight: "80",
        count: "10"
      }
    ]
  },
  height: "170",
  now: "24.09.2023"
}

export const dataSlice = createSlice({
  name: 'myData',
  initialState,
  reducers: {
    updateWeight(state, action) {
      const now = new Date().toLocaleDateString("ru")
      const newWeight = {
        date: action.payload.date || now,
        value: action.payload.value
      }
      state.weight.push(newWeight)
    },
    deleteWeight(state, action) {
      let weightArray = [...state.weight]
      weightArray = weightArray.filter((el) => {
        return el.date !== action.payload.date ||
        el.value !== action.payload.value
      })
      state.weight = weightArray
    },
    logData(state) {
      console.log('STATE', state)
    },
    writeData(state, action) {
      const { login, name, weight, sport, height, now } = action.payload
      if (login) state.login = login
      if (name) state.name = name
      if (weight) state.weight = weight
      if (sport) state.sport = sport
      if (height) state.height = height
      if (now) state.now = now
    }
  },
})

export const { updateWeight, deleteWeight, logData, writeData } = dataSlice.actions
export default dataSlice.reducer