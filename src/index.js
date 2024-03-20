import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import Models from "./page/Models";
import ModelsDetail from "./page/ModelsDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index:true, element: <Home/>},
            {path: '/model', element: <Models/>},
            {path: '/model/:modelId', element: <ModelsDetail/>},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();