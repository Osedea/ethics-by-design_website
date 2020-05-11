import React from "react"

import style from "./hero.module.css"
import PrefixedImage from "./prefixed-image"

export default function Hero(props) {
    return (
        <article className={[style.container, props.dark && style.dark].join(' ')}>
            {props.title && (
                <div className={['bordered', style.title].join(' ')}>
                    {props.title}
                </div>
            )}
            <div className={[style.media, props.title && style.withtitle].join(' ')}>
                <PrefixedImage src={props.media} cover />
                {props.hasVideo && <PrefixedImage src='/assets/play.png' className={style.play} />}
            </div>
            <div className={['bordered', style.side, props.bigSide && style.big].join(' ')}>
                {props.sideTitle && <header>{props.sideTitle}</header>}
                {props.sideHtml
                    ? <p dangerouslySetInnerHTML={{ __html: props.sideHtml }} />
                    : <p>{props.side}</p>
                }
            </div>
        </article>
    )
};
