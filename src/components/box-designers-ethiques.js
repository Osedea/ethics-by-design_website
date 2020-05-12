import React from "react"

import LogoDesignersEthiques from "./logo-designers-ethiques"
import style from "./box-designers-ethiques.module.css"

export default function BoxDesignersEthiques(props) {
    return (
        <div className={style.container}>
            <div className={style.boxlogo}>
                <LogoDesignersEthiques />
            </div>
            <div className={style.boxtext} dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
        </div>
    )
};
