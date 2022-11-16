import React from 'react';
import { Counter } from './features/counter/Counter';
import {Table} from './features/snake/components/Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Table />
      </header>
    </div>
  );
}

export default App;
