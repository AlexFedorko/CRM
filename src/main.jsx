import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@crossfox/css-start';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Customers from "./Page/Customer/List/index.jsx";

const router = createBrowserRouter([
    {
        path: '/customer/list',
        element: <Customers/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
