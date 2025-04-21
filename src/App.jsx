import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import RegistrationPage from "./pages/RegistrationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/style.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        {/* Маршрут по умолчанию */}
        <Route path="/" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
