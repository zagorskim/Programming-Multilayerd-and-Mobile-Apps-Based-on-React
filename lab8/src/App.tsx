import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { Error404Page } from './components/Error404Page';
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from './components/Layout';
import { CarsPage } from './components/CarsPage';
import { NewCarPage } from './components/NewCarPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cars" element={<CarsPage />}>
            <Route path='new' element={<NewCarPage/>}/>
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
