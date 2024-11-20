import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./globals/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./globals/layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Category from "./pages/Category/Category";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/shop" element={<Layout><Shop /></Layout>}/>
        <Route path="/product/:id" element={<Layout><ProductPage /></Layout>}/>
        <Route path="/category/:categoryName" element={<Layout><Category /></Layout>}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

reportWebVitals();
