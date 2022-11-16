import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  head: [6, 2],
  directions: [0, 0, 0, 0], // 0 - left, 1 - up, 2 - right, 3 - down
  length: 5,
};

export const snakeSlice = createSlice({
  name: 'snake/table',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveUp: (state) => {
      state.head[1] += 1;
      state.directions.push(3);
      state.directions.shift();
      // direction array logic
    },
    moveDown: (state) => {
      state.head[1] -= 1;
      state.directions[state.directions.length] = 1;
    },
    moveLeft: (state) => {
      state.head[0] += 1;
      state.directions[state.directions.length] = 2;
    },
    moveRight: (state) => {
      state.head[0] -= 1;
      state.directions[state.directions.length] = 0;
    },
  },
});

export const { moveUp, moveDown, moveLeft, moveRight } = snakeSlice.actions;

export const selectHead = (state) => state.counter.head;

export const selectDirections = (state) => state.counter.directions;

export const selectLength = (state) => state.counter.directions;

export default snakeSlice.reducer;