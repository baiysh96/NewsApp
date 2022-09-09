import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import newsReducer from './slices/newsSlice'
const rootReducer = combineReducers({
  userReducer,
  newsReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
