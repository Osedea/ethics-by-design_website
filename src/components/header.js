import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"

export default function Header(props) {
    return (
        <header>
            <Logo />
            <ul>
                {props.pages.map((item) => <li><Link to={item.url}>{item.label}</Link></li>)}
            </ul>
        </header>
    )
};
