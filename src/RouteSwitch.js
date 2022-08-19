import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import FilmList from "./components/FilmList";
import NavBar from "./components/NavBar";
import App from "./App";

const RouteSwitch = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/films" element={<FilmList/>}/>
                <Route path="/characters" element={<Characters/>}/>
            </Routes>
        </Router>
    )
}

export default RouteSwitch;