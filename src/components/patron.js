import React from "react"

import Tag from "./tag"
import PrefixedImage from "./prefixed-image"
import style from "./patron.module.css"

export default function Patron(props) {
    return (
        <article className={['bordered', style.container].join(' ')}>
            <div className={style.logo}>
                {props.picture_url
                    ? <PrefixedImage src={props.picture_url} alt={`Logo ${props.name}`} />
                    : <h3>{props.name}</h3>
                }
            </div>
            <div className={style.content}>
                <p>{props.description}</p>
                {props.links && props.links.length > 0
                    ? <div className={style.links}>
                        {props.links.map((link) => <Tag key={link.target} link={link.target} text={link.text} />)}
                    </div>
                    : null
                }
            </div>
        </article>
    )
};
