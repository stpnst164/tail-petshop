import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminHome from './components/AdminHome/AdminHome.jsx';
// import { AddItems } from './pages/AddItems/AddItems.jsx';
// import { ListItems } from './pages/ListItems/ListItems.jsx';
// import { Orders } from './pages/Orders/Orders.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
