import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';
import Header from './components/layout/Header/Header';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
          <Route
            path="/products"
            element={<PrivateRoute element={<ProductListPage />} />}
          />
          <Route
            path="/products/:id"
            element={<PrivateRoute element={<ProductDetailPage />} />}
          />
          <Route
            path="/create-product"
            element={<PrivateRoute element={<CreateProductPage />} />}
          />
          <Route
            path="/edit-product/:id"
            element={<PrivateRoute element={<EditProductPage />} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
