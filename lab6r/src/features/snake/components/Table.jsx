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
} from "../snakeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Table = () => {
  const size = 15;
  const length = useSelector(selectLength);
  const head = useSelector(selectHead);
  const directions = useSelector(selectDirections);
  let tab = [];
  const dispatch = useDispatch();

  const CalculateTab = (head, directions, size) => {
    let tab = [];
    tab.length = size * size;
    tab.fill(0);
    tab[head[0] + head[1] * size] = 2;
    let x = head;
    const reversedDirections = directions.reverse();
    directions.forEach((element) => {
      switch (element) {
        case 0:
          x[0]--;
          break;
        case 1:
          x[1]++;
          break;
        case 1:
          x[0]++;
          break;
        case 1:
          x[1]--;
          break;
      }
      tab[x[1] * size + x[0]] = 1;
    });
    return tab;
  };

  tab = CalculateTab([6, 2], [0,0,0,0], size);
  console.log(tab);
  let rows = [];
  for (let y = 0; y < 15; y++) {
    const cells = [];
    for (let x = 0; x < 15; x++) {
      cells.push(<Field content={tab[y * 15 + x]} id={y * 15 + x} />);
    }
    rows.push(<tr>{cells}</tr>);
  }

  return (
    <div class="main">
      <h1>Snake Game</h1>
      <div class="grid">{rows}</div>
      <button onClick={() => dispatch(moveLeft())}>Left</button>
      <button onClick={() => dispatch(moveUp())}>Up</button>
      <button onClick={() => dispatch(moveRight())}>Right</button>
      <button onClick={() => dispatch(moveDown())}>Down</button>
    </div>
  );
};
