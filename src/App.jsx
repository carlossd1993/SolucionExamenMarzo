import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Menu from "./Pages/Components/Menu.jsx";
import Obras from "./Pages/Obras.jsx";
import Contacto from "./Pages/Contacto.jsx";

function App() {

    return (
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Obras" element={<Obras />}/>
                <Route path="/Contacto" element={<Contacto />}/>
                <Route path="/*" element={<div className="error"> <img src="https://http.cat/404"/></div>}/>
            </Routes>

        </BrowserRouter>
    )
}



export default App
