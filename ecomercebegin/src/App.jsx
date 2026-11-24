import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import MainLayout from "./components/MainLayout";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 Page Not Found</h1>}
        />
      </Route>
    </Routes>
  );
};

//https://gist.github.com/dmitry-osin/a1249ae982c9345db530bf116ea093b3

export default App;
