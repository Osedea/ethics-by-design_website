import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

import style from "./header.module.css"

export default function Header(props) {

  return (
    <header className={style.header}>
      <Logo />
      <ul>
        {props.pages.map((item) => (
          <li key={item.url} className={props.location && props.location.pathname === item.url && style.active || ''}>
            <Link
              to={item.url}
              className={`${style.link} ${
                item.highlighted && style.linkhighlighted
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
