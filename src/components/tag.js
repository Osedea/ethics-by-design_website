import React from "react"

import style from "./tag.module.css"

export default function Tag(props) {
    return (
        <span className={style.container}>
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
            >
                {props.text.toUpperCase()}
            </a>
        </span>
    )
};
