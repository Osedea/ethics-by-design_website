import React from "react"
import PrefixedImage from "./prefixed-image"

import Tag from "./tag"

import style from "./speaker.module.css"

export default function Speaker(props) {
  const nameAndTitleClass = props.cut ? style.fullwidth : style.pulledup;

  return (
    <article className={style.speaker}>
        {props.picture_url && <PrefixedImage src={props.picture_url} alt={`Photo ${props.name}`} />}
        <div className={style.content}>
            <header className={nameAndTitleClass}>{props.name}</header>
            <header className={style.title}>{props.role}</header>
        </div>
        {!props.cut ? (
            <div>
            <p>{props.description}</p>
            {props.links && props.links.length > 0
                ? <footer className={style.social}>
                    {props.links.map((link) => (
                    <Tag link={link.target} value={link.text} />
                    ))}
                </footer>
                : null
            }
            </div>
        ) : null}
    </article>
  )
}
