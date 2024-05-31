import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import { ProductProvider } from './context/ProductContex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Popular from './components/Popular';

function App() {
    return (
        <BrowserRouter>
            <ProductProvider>
                <div className="d-flex flex-column min-vh-100 contianer-fluid">
                    <Navbar />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/allproducts" element={<Allproducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/popular" element={<Popular />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </ProductProvider>
        </BrowserRouter>
    );
}

export default App;
