import React from "react"
import { Link } from "gatsby"

import Card from './card';
import style from "./sponsors.module.css"

export default function Sponsors(props) {
  return (
    <div className={style.sponsor}>
      <div className="sponsor-main">{props.main}</div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
              <Card linkTarget={item.link} linkText={item.name} />
          </li>
        ))}
      </ul>
      <div className="sponsor-support">{props.support}</div>
    </div>
  )
}
