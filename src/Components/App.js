import React from "react";
import Header from "./Header";
import Home from "./Home";
import SearchHeader from "./SearchHeader";
import SubHeader from "./SubHeader";
import Checkout from "./Checkout";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage"
import SearchResult from "./SearchResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={[<Header />, <SubHeader />, <Checkout />, <Footer />]}
            path="/checkout"
          />
          <Route
            element={[<Header />, <SubHeader />, <Home />, <Footer />]}
            path="/"
          />
          <Route
            element={[
              <Header />,
              <SubHeader />,
              <SearchHeader />,
              <ProductPage />,
              <Footer />,
            ]}
            path="/product"
          />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
