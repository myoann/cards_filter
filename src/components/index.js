import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardsList from './CardsList/';
import Search from './Search/';

function App() {
  return (
    <Router>
      <Search />
      <CardsList />
    </Router>
  );
}

export default App;
