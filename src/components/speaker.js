import React from "react"

import Tag from "../components/tag"

import style from "./speaker.module.css"

export default function Speaker(props) {
  const nameAndTitleClass = props.cut ? "full-width" : "pulled-up"

  return (
    <article className={style.speaker}>
      <img src={props.picture} />
      <div className={nameAndTitleClass}>
        <p className="speaker-name">{props.name}</p>
        <p className="speaker-title">{props.title}</p>
      </div>
      {!props.cut ? (
        <div>
          <p>{props.description}</p>
          <div className="speaker-social">
            {props.links.map((link) => (
              <Tag link={link.target} value={link.text} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  )
}
