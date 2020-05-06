import React from "react"

import style from "./content-wrapper.module.css"

export default function ContentWrapper(props) {
    return (
        <div className={style.contentWrapper}>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    )
};