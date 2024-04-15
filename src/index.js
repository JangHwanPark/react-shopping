import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import Models from "./page/Models";
import ModelConfiguration from "./page/ModelConfiguration";
import ModelsSpec from "./page/ModelsSpec";
import Lounge from "./page/Lounge";
import TestDrive from "./page/TestDrive";
import Authentication from "./page/Authentication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index:true, element: <Home/>},
            {path: '/models/:modelId', element: <Models/>},
            {path: '/model/:modelId/model-configuration', element: <ModelConfiguration/>},
            {path: '/model/:modelId/spec', element: <ModelsSpec/>},
            {path: '/test-drive', element: <TestDrive/>},
            {path: '/lexus-lounge', element: <Lounge/>},
            {path: '/login', element: <Authentication/>},
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