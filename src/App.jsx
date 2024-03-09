import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Obras from "./Pages/Obras.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Error from "./Pages/Error.jsx";
import React from "react";
//..........

function App() {
  
  return (
      <RouterProvider router={router}/>
  )
}

export default App
