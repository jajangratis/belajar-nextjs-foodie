
import Image from "next/image";
import Link from "next/link";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

import classes from './main-header.module.css'
import logoImg from '@/assets/logo.png'

export default function MainHeader(params) {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="Logo website" priority/>
                    NEXT LEVEL FOOD
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meal</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}