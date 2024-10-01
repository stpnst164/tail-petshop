import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminHome/AdminHome.jsx';
import { AddItems } from './pages/AddItems/AddItems.jsx';
import { ListItems } from './pages/ListItems/ListItems.jsx';
import { Orders } from './pages/Orders/Orders.jsx';

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <hr />
                <div className="app-content">
                    <Sidebar />
                    <Routes>
                        {/* <Route path="/" element={<AdminHome />} /> */}
                        <Route path="/addItems" element={<AddItems />} />
                        <Route path="/listItems" element={<ListItems />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </div>
            ;
        </>
    );
};

export default App;
