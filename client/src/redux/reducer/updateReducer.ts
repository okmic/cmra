import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
  update: UpdateType
}

export interface UpdateType {
  name: string
  counterparty: string
  city: string
  adress: string
  email: string
  site: string
  description: string
}

const initialState: CounterState = {
  value: 0,
  update: {
    name: 'Казаева Алина Борисовна',
    counterparty: 'Управление по труду, занятости и соцзащите',
    city: 'Черкесск',
    adress: 'ул. Красноармейская, 2',
    email: 'lina.kazalieva@bk.ru',
    site: 'www.skga.ru',
    description: ''
  }
}

export const updateReducer = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.update.name = action.payload
    },
    updateCounterparty: (state, action) => {
      state.update.counterparty = action.payload
    },
    updateCity: (state, action) => {
      state.update.city = action.payload
    },
    updateAdress: (state, action) => {
      state.update.adress = action.payload
    },
    updateEmail: (state, action) => {
      state.update.email = action.payload
    },
    updateSite: (state, action) => {
      state.update.site = action.payload
    },
    updateDescription: (state, action) => {
      state.update.description = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { updateName, updateCounterparty, updateCity, updateAdress, updateDescription, updateEmail, updateSite} = updateReducer.actions

export default updateReducer.reducer