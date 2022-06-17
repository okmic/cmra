import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './reducer/accountsReducer'
import authReducer from './reducer/authReducer'
import boockReducer from './reducer/boockReducer'
import counterpartysReducer from './reducer/counterpartysReducer'
import dogsReducer from './reducer/dogsReducer'

export const store = configureStore({
  reducer: {
    counterpartys: counterpartysReducer,
    auth: authReducer,
    accounts: accountsReducer,
    dogs: dogsReducer,
    boock: boockReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch