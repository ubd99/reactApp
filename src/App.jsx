import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import {Home} from './Components/Home'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App