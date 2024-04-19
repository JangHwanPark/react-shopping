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
import MyAccount from "./pages/MyAccount/MyAccount";
import Lounge from "./pages/Lounge";
import TestDrive from "./pages/TestDrive";
import Authentication from "./pages/Authentication";
import SavedModels from "./pages/MyAccount/SavedModels";
import MyCar from "./pages/MyAccount/MyCar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index:true, element: <Home/>},
            {path: '/models/:modelId', element: <Models/>},
            {path: '/test-drive/:modelId', element: <TestDrive/>},
            {path: '/lexus-lounge', element: <Lounge/>},
            {path: '/model/:modelId/model-configuration', element: <ModelConfiguration/>},
            {path: '/user/account/:userId/my-account', element: <MyAccount/>},
            {path: '/user/account/:userId/my-car', element: <MyCar/>},
            {path: '/user/account/:userId/saved-models', element: <SavedModels/>},
            {path: '/login', element: <Authentication/>},
        ]
    }
])

/* Todo: 나중에 스트릭 모드 제거 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();