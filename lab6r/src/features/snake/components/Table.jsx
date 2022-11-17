import { useState } from "react";
import "./styles/Table.css";
import { Field } from "./Field";
import {
  moveLeft,
  moveUp,
  moveDown,
  moveRight,
  selectLength,
  selectHead,
  selectDirections,
  selectSize,
} from "../snakeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Table = () => {
  const length = useSelector(selectLength);
  const head = useSelector(selectHead);
  const directions = useSelector(selectDirections);
  const size = useSelector(selectSize);

  let board = [];
  board.length = size * size;
  board.fill(0);
  const dispatch = useDispatch();
  let rows = []; 
  useEffect(() => {
  }, [])
  
  CalculateTab(head, directions, size, board);
  
  for (let y = 0; y < size; y++) {
    const cells = [];
    for (let x = 0; x < size; x++) {
      cells.push(<Field content={board[y * size + x]} id={y * size + x} />);
    }
    rows.push(<tr>{cells}</tr>);
  }
  document.onkeydown = (e) =>{ 
    let name = e.name;
    let code = e.code;
    switch(code){
    case "ArrowUp":
      dispatch(moveUp());
      break;
    case "ArrowDown":
      dispatch(moveDown());
      break;
    case "ArrowLeft":
      dispatch(moveLeft());
      break;
    case "ArrowRight":
      dispatch(moveRight());
      break;
      case "KeyW":
        dispatch(moveUp());
        break;
      case "KeyS":
        dispatch(moveDown());
        break;
      case "KeyA":
        dispatch(moveLeft());
        break;
      case "KeyD":
        dispatch(moveRight());
        break;
    default:
    }}

  return (
    <div className="main" >
      <h1>Snake</h1>
      <div autoFocus="true" className="grid">{rows}</div>
      <button onClick={() => dispatch(moveLeft())}>Left</button>
      <button onClick={() => dispatch(moveUp())}>Up</button>
      <button onClick={() => dispatch(moveRight())}>Right</button>
      <button onClick={() => dispatch(moveDown())}>Down</button>
    </div>
  );
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
