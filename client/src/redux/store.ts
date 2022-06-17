import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/authReducer'
import counterpartysReducer from './reducer/counterpartysReducer'

export const store = configureStore({
  reducer: {
    counterpartys: counterpartysReducer,
    auth: authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch