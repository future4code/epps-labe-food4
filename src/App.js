import React from 'react';
import { CategoryFilter } from './Components/CategoryFilter/CategoryFilter';
import { SearchFilter } from './Components/SearchFilter/SearchFilter';

function App() {
  return (
    <div>
      <h1>Future Eats</h1> 
      <SearchFilter />
      <CategoryFilter />
    </div>
  );
}

export default App;
