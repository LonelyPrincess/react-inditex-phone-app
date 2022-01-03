import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const App = () => {
  console.log('todo');
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route
          path="*"
          element={<Navigate to="/products" />}
        />
      </Routes>
    </div>
  );
};

export default App;
