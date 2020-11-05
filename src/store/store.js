import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice'

const store = configureStore({
  reducer: {    
    data: appReducer,
  },
})
export default store

