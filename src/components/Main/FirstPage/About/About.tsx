import React, {useEffect, useRef, useState} from "react";
import style from './about.module.scss';
import src from '../../../../assets/img/01.jpg';
import useIntersectionObserver from '@react-hook/intersection-observer';
import clsx from "clsx";

export const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { isIntersecting } = useIntersectionObserver(
        ref,
        {
            threshold: 1
        }
    );

    const [isIntersected1, setIsIntersected1] = useState(false);
    const [isIntersected2, setIsIntersected2] = useState(false);

    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIsIntersected1(true);
            id = setTimeout(() => {
                setIsIntersected2(true);
            }, 200);

        }
        return () => {
            id && clearTimeout(id)
        }
    }, [isIntersecting]);

    return (
        <div className={style.about}
             id='about'
             ref={ref}
        >

            <div className={clsx({
                [style.firstBlock]: true,
                [style.firstBlock_intersected]: isIntersected1,
            })}>

                <h2 className={style.title}>
                    <span>About </span>
                    <span>project</span>
                </h2>

                <img className={style.img}
                     src={src}
                     alt="About project"
                />

            </div>

            <div className={clsx({
                [style.secondBlock]: true,
                [style.secondBlock_intersected]: isIntersected2,
            })}>

                <h2 className={style.title}>
                    <span>About </span>
                    <span>project</span>
                </h2>

                <p className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                </p>

                <button className={style.button}>
                    Read whitepaper
                </button>
            </div>




        </div>
    )
}