import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Cocktails App</h2>
      </header>
    </div>
  );
}

export default App;
