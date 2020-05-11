import React from "react"
import PrefixedImage from "./prefixed-image"

import Tag from "./tag"

import style from "./speaker.module.css"

export default function Speaker(props) {
  return (
    <article className={style.speaker}>
        {props.picture_url && <PrefixedImage className={style.profilepic} src={props.picture_url} alt={`Photo ${props.name}`} />}
        <div className={[style.headers, !props.cut && style.pullup].join(' ')}>
            <header>{props.name}</header>
            <header className={style.title}>{props.role}</header>
        </div>
        {!props.cut ? (
            <div>
            <p className={style.description}>{props.description}</p>
            {props.links && props.links.length > 0
                ? <footer className={style.social}>
                    {props.links.map((link) => (
                        <Tag key={`${props.name}-${link.text}`} link={link.target} text={link.text} />
                    ))}
                </footer>
                : null
            }
            </div>
        ) : null}
    </article>
  )
}
