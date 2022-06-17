import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
  data: any
}



const initialState: CounterState = {
  value: 0,
  data: []
}

export const appReducer = createSlice({
  name: 'crma',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getData} = appReducer.actions

export default appReducer.reducer