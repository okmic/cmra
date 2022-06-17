import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  list: Array<BoockType>
}

export interface BoockType {
  id: number
  name: string
  email: string
  comment: string
}

const initialState: CounterState = {
  list: [
    {
      id: 1,
      name: 'Казаева Алина Борисовна',
      email: 'lina.kazalieva@bk.ru',
      comment: ''
    },
    {
      id: 2,
      name: 'Гогуев Ахмат Расулович',
      email: 'ahmat.rasulovich@list.ru',
      comment: ''
    },
    {
      id: 3,
      name: 'Лапшина Валерия Александровна',
      email: 'lavaa_03@mail.ru',
      comment: ''
    },
    
  ]
}

export const boockReducer = createSlice({
  name: 'boock',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push({id: state.list.length + 1, ...action.payload});
    },
    remove: (state, action) => {
      state.list.splice(state.list.findIndex((arrow) => arrow.id === action.payload), 1);
    }
    },
  }
)

// Action creators are generated for each case reducer function
export const {add, remove} = boockReducer.actions

export default boockReducer.reducer