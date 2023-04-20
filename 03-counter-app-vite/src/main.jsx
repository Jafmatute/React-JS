import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './HelloWordApp.jsx';
import FirstApp from './FirstApp.jsx';

import './style.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp title="React js" />
    </React.StrictMode>
)

