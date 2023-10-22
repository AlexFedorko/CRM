import React from 'react';
import ReactDOM from 'react-dom/client';
import '@crossfox/css-start';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Customers from "./Page/Customer/List/index.jsx";
import CustomersAdd from "./Page/Customer/Add/index.jsx";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducerGlobal from '/src/Global/reducer'

const store = configureStore({
    reducer: {
        app: reducerGlobal,
    },
})


const router = createBrowserRouter([
    {
        path: '/customer/list',
        element: <Customers/>
    },
    {
        path: '/customer/add',
        element: <CustomersAdd/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
