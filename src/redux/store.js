import { configureStore } from '@reduxjs/toolkit';
import  { counterSlice} from './slides/countSlide';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})