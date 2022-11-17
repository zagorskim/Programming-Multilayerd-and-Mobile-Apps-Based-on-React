import React from 'react';
import { Counter } from './features/counter/Counter';
import {Table} from './features/snake/components/Table'
import './App.css';
import {
  moveLeft,
  moveUp,
  moveDown,
  moveRight,
} from "./features/snake/snakeSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
