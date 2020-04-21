import React from "react"
import { Link } from "gatsby"

import style from "./logo.module.css"

export default function Logo() {
  return (
    <div className={style.logo}>
      <Link to="/">
        <span className="logo">Ethics by Design</span>
      </Link>
    </div>
  )
}
