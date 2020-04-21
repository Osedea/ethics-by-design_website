import React from "react"
import { Link } from "gatsby"

import style from "./sponsors.module.css"

export default function Sponsors(props) {
  console.log(props)
  return (
    <div className={style.sponsor}>
      <div className="sponsor-main">{props.main}</div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="sponsor-support">{props.support}</div>
    </div>
  )
}
