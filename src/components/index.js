import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardsList from './CardsList/';
import Search from './Search/';
import './index.css';
const tkt = 'ok';

function App() {
  return (
    <Router>
      <div className="App">
        <Search />
        <CardsList />
      </div>
    </Router>
  );
}

export default App;
