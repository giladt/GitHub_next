import React, { useState, useEffect } from 'react';
import Link  from "next/link";
import style from './Navbar.module.css';
import { Button } from "../Button/Button"


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(true);
        } else {
            setButton(false);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

      (typeof window !== "undefined") && window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={style.navbar}>
                <div className= {style["navbar-container"]}>
                    <Link href="/" className={style["navbar-logo"]} onClick={closeMobileMenu}>
                    <a>
                        <img src="/images/gr8hub.png" alt="gr8hub"/>
                    </a> 
                    </Link>
                    <div className={style["menu-icon"]} onClick={handleClick}>
                        <i className={style[click ? 'fas fa-times' : 'fas fa-bars']} />
                    </div>
                    <ul className={style[click ? "nav-menu active" : "nav-menu"]}>
                        <li clasName={style["nav-item"]}>
                            <Link href="/mentor-werden" className={style["nav-links"]} onClick={closeMobileMenu}>
                                Mentor werden
                            </Link>
                        </li>
                        <li clasName={style["nav-item"]}>
                            <Link href="/community-hub" className={style["nav-links"]} onClick={closeMobileMenu}>
                                Community Hub
                            </Link>
                        </li>
                        <li clasName={style["nav-item"]}>
                            <Link href="/anmeldung" className={style["nav-links-mobile"]} onClick={closeMobileMenu}>
                                Kostenlos Platz sichern
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Kostenlos Platz sichern</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
