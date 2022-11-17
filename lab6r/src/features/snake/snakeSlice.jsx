import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  head: [6, 2],
  directions: [0, 0, 0, 0, 0], // 0 - left, 1 - up, 2 - right, 3 - down
  length: 5,
  tab: [],
  size: 35,
};

export const snakeSlice = createSlice({
  name: 'snake/table',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveUp: (state) => {
      if(state.head[1] > 0) { // Condition not to allow move forward to be added later
      state.head[1] -= 1;
      state.directions.push(1);
      state.directions.shift();
      }
    },
    moveDown: (state) => {
      if(state.head[1] < state.size - 1) {
      state.head[1] += 1;
      state.directions.push(3);
      state.directions.shift();
      }
    },
    moveLeft: (state) => {
      if(state.head[0] > 0) {
      state.head[0] -= 1;
      state.directions.push(2);
      state.directions.shift();
      }
    },
    moveRight: (state) => {
      if(state.head[0] < state.size - 1) {
        state.head[0] += 1;
        state.directions.push(0);
        state.directions.shift();
      }
    },
    setSnake: (state, action) => {
      state.head = action.payload[0];
      state.directions = action.payload[1];
      state.length = state.directions.length + 1;
    },
  },
});

export const { moveUp, moveDown, moveLeft, moveRight, setSnake } = snakeSlice.actions;

export const selectHead = (state) => state.snake.head;

export const selectDirections = (state) => state.snake.directions;

export const selectLength = (state) => state.snake.length;

export const selectSize = (state) => state.snake.size;

export default snakeSlice.reducer;