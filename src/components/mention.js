import React from "react"
import { Link } from "gatsby"

import style from "./mention.module.css"

export default function Mention(props) {
  return (
    <div className={style.mention}>
      <p>{props.text}</p>
    </div>
  )
}
