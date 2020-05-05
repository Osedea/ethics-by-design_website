import React from "react"
import PrefixedImage from "./prefixed-image"

import Tag from "./tag"

import style from "./speaker.module.css"

export default function Speaker(props) {
  const nameAndTitleClass = props.cut ? "full-width" : "pulled-up"

  return (
    <article className={style.speaker}>
      {props.picture_url && <PrefixedImage src={props.picture_url} />}
      <div className={nameAndTitleClass}>
        <p className="speaker-name">{props.name}</p>
        <p className="speaker-title">{props.title}</p>
      </div>
      {!props.cut ? (
        <div>
          <p>{props.description}</p>
          {props.links && props.links.length > 0
            ? <div className="speaker-social">
                {props.links.map((link) => (
                <Tag link={link.target} value={link.text} />
                ))}
            </div>
            : null
        }
        </div>
      ) : null}
    </article>
  )
}
