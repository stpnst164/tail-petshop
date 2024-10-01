import React from 'react';
import './AdminHome.css';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const AdminHome = () => {
    return (
        <>
            <div className="admin-home">
                <Navbar />
                <hr />
                <Sidebar />
            </div>
        </>
    );
};

export default AdminHome;
