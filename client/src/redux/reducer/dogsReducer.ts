import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  dogs: Array<DogsType>
}

export interface DogsType {
  id: number
  name: string
  date: string
  doc: string
  comment: string
}

const initialState: CounterState = {
  dogs: [
    {
      id: 1,
      name: 'Казаева Алина Борисовна',
      date: '2021/07/05',
      doc: '',
      comment: ''
    },
    {
      id: 2,
      name: 'Гогуев Ахмат Расулович',
      date: '2022/06/11',
      doc: '',
      comment: ''
    },
    {
      id: 3,
      name: 'Лапшина Валерия Александровна',
      date: '2022/07/06',
      doc: '',
      comment: ''
    },
    
  ]
}

export const dogsReducer = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    add: (state, action) => {
      state.dogs.push({id: state.dogs.length + 1, ...action.payload, doc: ''});
    },
    remove: (state, action) => {
      state.dogs.splice(state.dogs.findIndex((arrow) => arrow.id === action.payload), 1);
    }
    },
  }
)

// Action creators are generated for each case reducer function
export const {add, remove} = dogsReducer.actions

export default dogsReducer.reducer