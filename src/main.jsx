import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './pages/History.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App />
  },
  {
    path: "/history",
    // element: <div>Hello world!</div>,
    element: <History />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
