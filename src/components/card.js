import React from "react"
import { Link } from "gatsby"

import PrefixedImage from "./prefixed-image"
import style from "./card.module.css"

export default function Card(props) {
    let link;

    if (props.internalLink) {
        link = (
            <div className="card-footer">
                <Link to={props.linkTarget}>{props.linkText}</Link>
            </div>
        )
    } else {
        link = (
            <div className="card-footer">
                <a href={props.linkTarget} target='_blank' rel='noopener'>{props.linkText}</a>
            </div>
        )
    }

    return (
        <article className={[style.card, props.dark && style.dark, props.small && style.small, !props.linkText && style.nofooter].join(' ')}>
            {props.title ? <h2 className={[style.title, props.titleDark && style.titleDark].join(' ')} dangerouslySetInnerHTML={{ __html: props.title }} /> : null}
            {props.content && <p>{props.content}</p>}
            {props.htmlContent && <div dangerouslySetInnerHTML={{ __html: props.htmlContent }} />}
            {props.linkText
                ? <footer className={style.footer}>
                    {link}
                    <PrefixedImage src="/assets/arrow-right.png" alt="Flèche vers la droite" />
                </footer>
                : null
            }
        </article>
    )
};
