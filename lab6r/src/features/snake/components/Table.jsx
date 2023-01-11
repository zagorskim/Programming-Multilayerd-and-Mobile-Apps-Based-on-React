import { useState } from "react";
import "./styles/Table.css";
import { Field } from "./Field";
import {
  moveLeft,
  moveUp,
  moveDown,
  moveRight,
  setSnake,
  setFood,
  setInter,
  ChangeGameMode,
  selectLength,
  selectHead,
  selectDirections,
  selectSize,
  selectFood,
  selectGameRunning,
} from "../snakeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";

// Flag of game status (run/stopped = lose) and eating mechanism to be added
export const Table = () => {
  const length = useSelector(selectLength);
  const head = useSelector(selectHead);
  const directions = useSelector(selectDirections);
  const size = useSelector(selectSize);
  const food = useSelector(selectFood);
  const mode = useSelector(selectGameRunning);
  const lastDir = useRef(directions[directions.length - 1]);
  //const foodfPosition = useRef(food);
  const iid = useRef(0);
  let board = [];
  board.length = size * size;
  board.fill(0);
  const dispatch = useDispatch();
  let rows = [];
  useEffect(() => {
    dispatch(setFood(calculateFoodCoords(size, board)));
  }, []);
  CalculateTab(head, directions, size, board);
  board[food[1] * size + food[0]] = 3;
  for (let y = 0; y < size; y++) {
    const cells = [];
    const c = [];
    for (let x = 0; x < size; x++) {
      cells.push(<Field content={board[y * size + x]} id={y * size + x} />);
      c.push();
    }
    rows.push(cells);
  }
  //

  document.onkeydown = (e) => {
    let name = e.name;
    let code = e.code;
    switch (code) {
      case "ArrowUp":
        if (
          directions[directions.length - 1] != 1 &&
          directions[directions.length - 1] != 3
        ) {
          dispatch(moveUp());
          lastDir.current = 1;
        }
        break;
      case "ArrowDown":
        if (
          directions[directions.length - 1] != 1 &&
          directions[directions.length - 1] != 3
        ) {
          dispatch(moveDown());
          lastDir.current = 3;
        }
        break;
      case "ArrowLeft":
        if (
          directions[directions.length - 1] != 0 &&
          directions[directions.length - 1] != 2
        ) {
          dispatch(moveLeft());
          lastDir.current = 2;
        }
        break;
      case "ArrowRight":
        if (
          directions[directions.length - 1] != 0 &&
          directions[directions.length - 1] != 2
        ) {
          dispatch(moveRight());
          lastDir.current = 0;
        }
        break;
      case "KeyW":
        if (
          directions[directions.length - 1] != 1 &&
          directions[directions.length - 1] != 3
        ) {
          dispatch(moveUp());
          lastDir.current = 1;
        }
        break;
      case "KeyS":
        if (
          directions[directions.length - 1] != 1 &&
          directions[directions.length - 1] != 3
        ) {
          dispatch(moveDown());
          lastDir.current = 3;
        }
        break;
      case "KeyA":
        if (
          directions[directions.length - 1] != 0 &&
          directions[directions.length - 1] != 2
        ) {
          dispatch(moveLeft());
          lastDir.current = 2;
        }
        break;
      case "KeyD":
        if (
          directions[directions.length - 1] != 0 &&
          directions[directions.length - 1] != 2
        ) {
          dispatch(moveRight());
          lastDir.current = 0;
        }
        break;
      default:
    }
  };

  return (
    <div className="main">
      <h1>Snake</h1>
      <div autoFocus={true} className="grid">
        {rows}
      </div>
      <button
        className="button"
        onClick={() => {
          console.log(iid.current)
          dispatch(ChangeGameMode(true));
          moveForward(lastDir, dispatch, iid);
        }}
      >
        Start
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(ChangeGameMode(true));
          dispatch(
            setSnake([
              [10, 10],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ])
          );
          lastDir.current = 0;
          clearInterval(iid.current);
          moveForward(lastDir, dispatch, iid);
        }}
      >
        Restart
      </button>
      <button
        className="button"
        onClick={() => {
          clearInterval(iid.current);
          dispatch(ChangeGameMode(false));
        }}
      >
        Stop
      </button>
    </div>
  );
};

export const calculateFoodCoords = (size, contents) => {
  let x = [];
  console.log(contents)
  if (contents !== undefined) {
    do {
      x[0] = Math.floor(Math.random() * size);
      x[1] = Math.floor(Math.random() * size);
    } while (contents[x[0] + size * x[1]] != 0);
  } else {
    x[0] = Math.floor(Math.random() * size);
    x[1] = Math.floor(Math.random() * size);
  }
  return x;
};

const moveForward = (lastDir, dispatch, iid) => {
  iid.current = setInterval(() => {
    switch (lastDir.current) {
      case 0:
        dispatch(moveRight());
        break;
      case 1:
        dispatch(moveUp());
        break;
      case 2:
        dispatch(moveLeft());
        break;
      case 3:
        dispatch(moveDown());
        break;
      default:
    }
  }, 100);
  dispatch(setInter(iid.current));
};

const CalculateTab = (head, directions, size, board) => {
  let x = [...head];
  let reversedDirections = [...directions];
  board.fill(0);
  board[head[0] + head[1] * size] = 2;
  reversedDirections.reverse();
  reversedDirections.forEach((element) => {
    switch (element) {
      case 0:
        x[0]--;
        break;
      case 1:
        x[1]++;
        break;
      case 2:
        x[0]++;
        break;
      case 3:
        x[1]--;
        break;
    }
    board[x[1] * size + x[0]] = 1;
  });
};
