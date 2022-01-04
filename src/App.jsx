import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const App = () => (
  <Container>
    <Header />
    <main>
      <Routes>
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />
        <Route
          path="*"
          element={<Navigate to="/products" />}
        />
      </Routes>
    </main>
  </Container>
);

export default App;
