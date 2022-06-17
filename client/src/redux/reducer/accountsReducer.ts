import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  accounts: Array<AccountsType>
}

export interface AccountsType {
  id: number
  name: string
  date: string
  price: number
  doc: string
  comment: string
}

const initialState: CounterState = {
  accounts: [
    {
      id: 1,
      name: 'Казаева Алина Борисовна',
      date: '2022/07/06',
      price: 15000,
      doc: '',
      comment: ''
    },
    {
      id: 2,
      name: 'Гогуев Ахмат Расулович',
      date: '2022/07/11',
      price: 15000,
      doc: '',
      comment: ''
    },
    {
      id: 3,
      name: 'Лапшина Валерия Александровна',
      date: '2022/08/15',
      price: 15000,
      doc: '',
      comment: ''
    },
    
  ]
}

export const accountsReducer = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAcc: (state, action) => {
      state.accounts.push({id: state.accounts.length + 1, ...action.payload, doc: ''});
    },
    remove: (state, action) => {
      state.accounts.splice(state.accounts.findIndex((arrow) => arrow.id === action.payload), 1);
    }
    },
  }
)

// Action creators are generated for each case reducer function
export const {addAcc, remove} = accountsReducer.actions

export default accountsReducer.reducer