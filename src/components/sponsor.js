import React from "react"

import Tag from "./tag"

import style from "./sponsor.module.css"

export default function Sponsor(props) {
  return (
    <article className={style.sponsor}>
        <Tag link={props.target} text={props.text} />
    </article>
  )
}
