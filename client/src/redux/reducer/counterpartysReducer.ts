import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  counterpartys: Array<CounterpartyType>
}

export interface CounterpartyType {
  id: number
  name: string
  counterparty: string
  city: string
  adress: string
  email: string
  site: string
  description: string
  main?: boolean
}

const initialState: CounterState = {
  counterpartys: [
    {
      id: 1,
      name: 'Казаева Алина Борисовна',
      counterparty: 'Управление по труду, занятости и соцзащите',
      city: 'Черкесск',
      adress: 'ул. Красноармейская, 2',
      email: 'lina.kazalieva@bk.ru',
      site: 'www.skga.ru',
      description: '',
      main: true
    }
  ]
}

export const counterpartysReducer = createSlice({
  name: 'counterparty',
  initialState,
  reducers: {
    add: (state, action) => {
      state.counterpartys.push({id: state.counterpartys.length + 1, ...action.payload});
    },
    remove: (state, action) => {
      state.counterpartys.splice(state.counterpartys.findIndex((arrow) => arrow.id === action.payload), 1);
    },
    updateName: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.name = action.payload.value
      })
    },
    updateCounterparty: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.counterparty = action.payload.value
      })
    },
    updateCity: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.city = action.payload.value
      })
    },
    updateAdress: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.adress = action.payload.value
      })
    },
    updateEmail: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.email = action.payload.value
      })
    },
    updateSite: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.site = action.payload.value
      })
    },
    updateDescription: (state, action) => {
      state.counterpartys.forEach(item =>{
        if( item.id === action.payload.id)
        item.description = action.payload.value
      })
    },
  }
})

// Action creators are generated for each case reducer function
export const {add, remove, updateName, updateCounterparty, updateCity, updateAdress, updateDescription, updateEmail, updateSite} = counterpartysReducer.actions

export default counterpartysReducer.reducer