import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import RegistrationPage from "./pages/RegistrationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChiefPage from "./pages/ChiefPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/" element={<ChiefPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
