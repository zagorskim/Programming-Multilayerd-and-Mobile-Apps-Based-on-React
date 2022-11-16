import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import snakeReducer from '../features/snake/snakeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    snake: snakeReducer,
  },
});
