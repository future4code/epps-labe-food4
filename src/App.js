import React from 'react';
import GlobalState from './GlobalState/GlobalState';
import { CartPage } from './Screens/CartPage/CartPage';

function App() {
  return (
    <GlobalState>
      <h1>Future Eats</h1> 
      <CartPage />
    </GlobalState>
  );
}

export default App;
