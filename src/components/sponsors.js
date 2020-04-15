import React from "react"
import { Link } from "gatsby"

export default function Sponsors(props) {
  return (
    <div className="sponsors">
      <div className="sponsor-main">{props.main}</div>
      <ul>
        {props.sponsors.map((item) => (
          <li>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="sponsor-support">{props.support}</div>
    </div>
  )
}
