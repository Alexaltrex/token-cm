import React, {FC} from "react";
import clsx from "clsx";
import style from './burgerMenu.module.scss';
import {Link} from "react-router-dom";
import {links, logotype} from "../Header/Header";
import mask from '../../assets/img/burger-mask.png'


export interface IBurgerMenu {
    isBurgerIsOpen: boolean
    onClickHandler: () => void
}

export const BurgerMenu:FC<IBurgerMenu> = ({isBurgerIsOpen, onClickHandler}) => {
    return (
        <div className={clsx({
                                [style.burgerMenu]: true,
                                [style.burgerMenu_open]: isBurgerIsOpen,
                            })}>
            <p className={style.logo}>
                {logotype}
            </p>

            <div className={style.linksWrapper}>
                <div className={style.links}>
                    {
                        links.map((link, index) => (
                            <Link key={index}
                                  to={
                                      index !== 4 ?
                                          {
                                              pathname: `/`,
                                              hash: `${link.link}`,
                                          }
                                          : `/airdrop`
                                  }
                                  className={style.link}
                                  onClick={onClickHandler}
                            >
                                {link.title}
                            </Link>
                        ))
                    }
                    <div className={style.radialGradient}/>
                    <img className={style.mask}
                        src={mask}
                         alt=""
                    />
                </div>
            </div>


            <a href="#"
               className={style.button}
               onClick={onClickHandler}
            >

                Connect Wallet
            </a>



        </div>
    )
}