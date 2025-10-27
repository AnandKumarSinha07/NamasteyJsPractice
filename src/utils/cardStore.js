import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from '../utils/cardSlice'

const store = configureStore({
  reducer: {
    card:cartSliceReducer
  },
})

export default store;