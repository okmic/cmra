import { createSlice } from '@reduxjs/toolkit'


export interface authType {
  auth: boolean
}

const initialState: authType = {
  auth: false
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.auth = action.payload.login === 'Алина' && action.payload.password === 'Алина' ? true : false
    }
  }
})

// Action creators are generated for each case reducer function
export const { auth } = authReducer.actions

export default authReducer.reducer