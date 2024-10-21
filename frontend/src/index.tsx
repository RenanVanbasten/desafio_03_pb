import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Category from "./pages/Category/Category"; // Importe a página de categorias

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:categoryName" element={<Category />} /> {/* Adicionando a rota dinâmica para Category */}
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

reportWebVitals();
