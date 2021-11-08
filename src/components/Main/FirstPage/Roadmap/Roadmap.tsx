import React, {FC} from "react";
import style from './roadmap.module.scss';

export interface IItem {
    title: string
    text: string
}

export const Roadmap:FC = () => {
    const items: IItem[] = [
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            title: 'Open Sale',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
    ]


    return (
        <div className={style.roadmap}>

            <div className={style.firstBlock}>

               <h2 className={style.title}>
                   <span>Our</span>
                   <span> roadmap</span>
               </h2>

                <p className={style.text}>
                    We won’t leave our community behind- our roadmap will be produced in consultation
                </p>

            </div>

            <div className={style.secondBlock}>

            </div>


        </div>
    )
}