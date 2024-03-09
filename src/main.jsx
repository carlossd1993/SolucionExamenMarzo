import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './estilos.scss'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Obras from "./Pages/Obras.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Error from "./Pages/Error.jsx";

export const router = createHashRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/Obras",
        element: <Obras/>
    },
    {
        path:"/Contacto",
        element: <Contacto/>
    },
    {
        path:"/*",
        element: <Error/>
    },

])
//...............

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
