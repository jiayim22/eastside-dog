import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './components/About';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="about" element={<About/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);