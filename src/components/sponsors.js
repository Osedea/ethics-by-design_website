import React from "react"

import Sponsor from './sponsor';
import style from "./sponsors.module.css"

export default function Sponsors(props) {
  return (
    <div className={style.sponsors}>
      <div className={style.main}>{props.main}</div>
      <ul className={style.list}>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
                {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="sponsor-support">{props.support}</div>
    </div>
  )
}
