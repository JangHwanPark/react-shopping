import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Models from "./pages/Models";
import ModelConfiguration from "./pages/ModelConfiguration";
import MyAccount from "./pages/MyAccount";
import Lounge from "./pages/Lounge";
import TestDrive from "./pages/TestDrive";
import Authentication from "./pages/Authentication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index:true, element: <Home/>},
            {path: '/models/:modelId', element: <Models/>},
            {path: '/model/:modelId/model-configuration', element: <ModelConfiguration/>},
            {path: '/user/account/:value', element: <MyAccount/>},
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