import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calculateFoodCoords } from "./components/Table";
const initialState = {
  head: [10, 10],
  directions: [0, 0, 0, 0, 0, 0, 0, 0, 0], // 0 - left, 1 - up, 2 - right, 3 - down
  length: 10,
  tab: [],
  size: 35,
  food: [0, 0],
  gameRunning: true,
  interval: 0,
};

export const snakeSlice = createSlice({
  name: "snake/table",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveUp: (state) => {
      if (state.gameRunning) {
        if (state.head[1] > 0) {
          // Condition not to allow move forward to be added later
          state.head[1] -= 1;
          state.directions.push(1);
          if (state.head[1] != state.food[1] || state.head[0] != state.food[0])
            state.directions.shift();
          else {
            state.length++;
            state.food = calculateFoodCoords(state.size);
          }
        } else {
          alert("you died hehs");
          clearInterval(state.interval);
          state.gameRunning = false;
        }
      }
    },
    moveDown: (state) => {
      if (state.gameRunning) {
        if (state.head[1] < state.size - 1) {
          state.head[1] += 1;
          state.directions.push(3);
          if (state.head[1] != state.food[1] || state.head[0] != state.food[0])
            state.directions.shift();
          else {
            state.length++;
            state.food = calculateFoodCoords(state.size);
          }
        } else {
          alert("you died hehs");
          clearInterval(state.interval);
          state.gameRunning = false;
        }
      }
    },
    moveLeft: (state) => {
      if (state.gameRunning) {
        if (state.head[0] > 0) {
          state.head[0] -= 1;
          state.directions.push(2);
          if (state.head[1] != state.food[1] || state.head[0] != state.food[0])
            state.directions.shift();
          else {
            state.length++;
            state.food = calculateFoodCoords(state.size);
          }
        } else {
          alert("you died hehs");
          clearInterval(state.interval);
          state.gameRunning = false;
        }
      }
    },
    moveRight: (state) => {
      if (state.gameRunning) {
        if (state.head[0] < state.size - 1) {
          state.head[0] += 1;
          state.directions.push(0);
          if (state.head[1] != state.food[1] || state.head[0] != state.food[0])
            state.directions.shift();
          else {
            state.length++;
            state.food = calculateFoodCoords(state.size);
          }
        } else {
          alert("you died hehs");
          clearInterval(state.interval);
          state.gameRunning = false;
        }
      }
    },
    setSnake: (state, action) => {
      state.head = action.payload[0];
      state.directions = action.payload[1];
      state.length = state.directions.length + 1;
    },
    setFood: (state, action) => {
      state.food = action.payload;
    },
    ChangeGameMode: (state, action) => {
      state.gameRunning = action.payload;
    },
    setInter: (state, action) => {
      state.interval = action.payload;
    },
  },
});

export const {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  setSnake,
  setFood,
  setInter,
  ChangeGameMode,
} = snakeSlice.actions;

export const selectHead = (state) => state.snake.head;

export const selectDirections = (state) => state.snake.directions;

export const selectLength = (state) => state.snake.length;

export const selectSize = (state) => state.snake.size;

export const selectFood = (state) => state.snake.food;

export const selectGameRunning = (state) => state.snake.selectGameRunning;

export default snakeSlice.reducer;
