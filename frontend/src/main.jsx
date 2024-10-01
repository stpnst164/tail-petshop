import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css';
import Cats from './pages/PopularCategories/Cats/Cats';
import Rabbits from './pages/PopularCategories/Rabbits/Rabbits';
import Chemistry from './pages/PopularCategories/Chemistry/Chemistry';
import DogCatalog from './pages/PopularCategories/Dogs/DogCatalog.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
import DogGoodsDisplay from './components/DogGoodsDisplay/DogGoodsDisplay.jsx';
import Cart from './pages/Cart/Cart.jsx';

createRoot(document.getElementById('root')).render(
    <StoreContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>Page Not Found</div>} />
                <Route path="dogs/catalog" element={<DogCatalog />} />
                <Route path="cats/catalog" element={<Cats />} />
                <Route path="rabbits/catalog" element={<Rabbits />} />
                <Route path="chemistry/catalog" element={<Chemistry />} />
                <Route
                    path="dogs/catalog/goods"
                    element={<DogGoodsDisplay />}
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </StoreContextProvider>
);
