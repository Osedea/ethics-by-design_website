import React from "react"

import style from "./boxed-text.module.css"

export default function BoxedText(props) {
    return (
        <div className={style.boxed}>{props.children}</div>
    )
};
