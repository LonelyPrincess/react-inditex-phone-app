import React from 'react';

import Header from './components/Header/Header';
import ProductList from './pages/ProductList/ProductList';

const App = () => {
  console.log('todo');
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
