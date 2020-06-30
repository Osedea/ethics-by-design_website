import React from "react"

import style from "./row.module.css"

export default function Header(props) {

  return (
    <div className={style.row}>
      {props.children}
    </div>
  )
}
