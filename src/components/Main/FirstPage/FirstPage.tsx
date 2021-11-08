import React from "react";
import {Welcome} from "./Welcome/Welcome";
import {About} from "./About/About";
import style from './firstPage.module.scss';
import {Roadmap} from "./Roadmap/Roadmap";

export const FirstPage = () => {
    return (
        <div className={style.firstPage}>

            <Welcome />
            <About />
            <Roadmap />
        </div>
    )
}