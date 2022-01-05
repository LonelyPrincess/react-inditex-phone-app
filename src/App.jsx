import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const App = () => (
  <>
    <Header />
    <Container>
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
    </Container>
  </>
);

export default App;
