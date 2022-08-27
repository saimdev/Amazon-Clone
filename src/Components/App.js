import React from 'react'
import Header from './Header'
import Home from './Home'
import SubHeader from './SubHeader'
import Checkout from './Checkout'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;


