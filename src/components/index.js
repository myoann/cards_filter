import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Search from "./Search";
import CardsList from "./CardsList";

function App() {
  return (
    <Router>
      <Search />
      <CardsList />
    </Router>
  );
}

export default App;
