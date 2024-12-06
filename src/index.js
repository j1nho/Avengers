import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Write from "./pages/Write";
import Category from "./pages/Category";
import Thismonth from "./pages/Thismonth"; // 캘린더 수정해야 함.
import Schedule from "./pages/Schedule";
import Analyze from "./pages/Analyze";
import Login from "./pages/Login";
import Save from "./pages/Save";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Profile />
);