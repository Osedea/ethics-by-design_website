import React from "react"

import style from "./mention.module.css"

export default function Mention(props) {
  return (
    <div className={style.mention}>
      <h5>{props.text}</h5>
    </div>
  )
}
