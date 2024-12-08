import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Write from "./pages/Write";
import Category from "./pages/Category";
import ThisMonth from "./pages/ThisMonth";
import Schedule from "./pages/Schedule";
import Analyze from "./pages/Analyze";
import Budget from "./pages/Budget";
import Profile from "./pages/Profile";
import Save from "./pages/Save";
import Home from "./pages/Home";
import Intro from "./pages/Intro";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Intro />
);