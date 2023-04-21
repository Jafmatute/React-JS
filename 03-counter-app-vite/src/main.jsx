import React from 'react';
import ReactDOM from 'react-dom/client';

import CounterApp from './CounterApp.jsx'

import './style.css';
import FirstApp from "./FirstApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<CounterApp value={10}  />*/}
        <FirstApp />
    </React.StrictMode>
)

