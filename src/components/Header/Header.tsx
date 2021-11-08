import clsx from 'clsx';
import React, {useState} from 'react';
import style from './header.module.scss';
import {Link} from "react-router-dom";

export const logotype = 'Logotype'
export const links = [
    {
        title: 'About',
        link: 'about',
    },
    {
        title: 'Roadmap',
        link: 'roadmap',
    },
    {
        title: 'Team',
        link: 'team',
    },
    {
        title: 'Community',
        link: 'community',
    },
    {
        title: 'Airdrop',
        link: 'airdrop',
    },
];

export const Header = () => {

    const [selectLinkIndex, setSelectLinkIndex] = useState(-1);

    return (
        <div className={style.header}>
            <p className={style.logo}>{logotype}</p>

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
                              className={clsx({
                                  [style.link]: true,
                                  [style.link_selected]: index === selectLinkIndex,
                              })}
                              onClick={() => setSelectLinkIndex(index)}
                        >
                            {link.title}
                        </Link>
                    ))
                }
            </div>

            <a className={style.button}
               href="#"
            >
                Connect Wallet
            </a>

        </div>
    );
}


