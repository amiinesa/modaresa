import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DayView from './components/DayView/DayView';
import './App.css';

const App = () => {
  return (
      <Router>
      <div className="app">
      <header className="app-header">
      <h1>ModaResa Agenda</h1>
  </header>
  <Routes>
  <Route path="/" element={<DayView />} />
  {/* Add any additional routes here */}
</Routes>
  </div>
  </Router>
);
};

export default App;
