import React from "react"

import style from "./pills.module.css"

export default function Pills(props) {
    return (
        <div className={['bordered', style.pills].join(' ')} {...props}>
            {props.children}
        </div>
    )
};
