import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/user.slice' 
import { beerApi } from './beer/beer.aip'

// state
const rootReducer = combineReducers({
    user: userReducer,
    [beerApi.reducerPath] : beerApi.reducer
})
export type RootState = ReturnType<typeof rootReducer>

// core
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerApi.middleware)
})

// action types
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
