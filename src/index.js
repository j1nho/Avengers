import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Write from "./pages/Write";
import Category from "./pages/Category";
import Thismonth from "./pages/Thismonth";
import Schedule from "./pages/Schedule";
import Analyze from "./pages/Analyze";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Analyze />
);