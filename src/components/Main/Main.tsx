import React from "react";
import { Routes, Route } from 'react-router-dom';
import { FirstPage } from "./FirstPage/FirstPage";
import { SecondPage } from "./SecondPage/SecondPage";

export const Main = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<FirstPage/>} />
                <Route path='/airdrop' element={<SecondPage/>} />

            </Routes>
        </div>
    )
}